const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const SVGO = require("svgo");
const mkdirp = require("mkdirp");
const File = require("vinyl");
const glob = require("glob");
const SVGSpriter = require("svg-sprite");

const spriter = new SVGSpriter({
  dest: "export",
  mode: {
    inline: true,
    symbol: true,
    defs: false,
  },
  shape: {
    // SVG shape related options
    id: {
      // SVG shape ID related options
      generator: function(name, file) {
        const nameWithoutExtension = name
          .split(".")
          .slice(0, -1)
          .join(".");
        return "icon-" + nameWithoutExtension;
      },
    },
    transform: [],
  },
});

const svgo = new SVGO({
  plugins: [
    {
      inlineStyles: {
        onlyMatchedOnce: false,
      },
    },
    {
      removeDimensions: true,
    },
    {
      removeViewBox: false,
    },
    {
      cleanupEnableBackground: true,
    },
  ],
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static("build"));

function promiseAllP(items, block) {
  var promises = [];
  items.forEach(function(item, index) {
    promises.push(
      (function(item, i) {
        return new Promise(function(resolve, reject) {
          return block.apply(this, [item, index, resolve, reject]);
        });
      })(item, index),
    );
  });
  return Promise.all(promises);
}

function readSingleFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", function(err, content) {
      if (err) return reject(err);
      const data = JSON.parse(content);
      return resolve(data);
    });
  });
}

function readLibraries(dirname) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, function(err, filenames) {
      if (err) return reject(err);
      promiseAllP(filenames, (filename, index, resolve, reject) => {
        fs.readFile(path.resolve(dirname, filename), "utf-8", function(
          err,
          content,
        ) {
          if (err) return reject(err);
          const data = JSON.parse(content);
          const outputData = { filename, ...data };
          return resolve(outputData);
        });
      })
        .then(results => {
          return resolve(results);
        })
        .catch(error => {
          return reject(error);
        });
    });
  });
}

function readIcons(dirname) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, function(err, filenames) {
      if (err) return reject(err);
      promiseAllP(filenames, (filename, index, resolve, reject) => {
        fs.readFile(path.resolve(dirname, filename), "utf-8", function(
          err,
          content,
        ) {
          if (err) return reject(err);
          const name = filename
            .split(".")
            .slice(0, -1)
            .join(".");
          const outputData = { filename, name, source: content };
          return resolve(outputData);
        });
      })
        .then(results => {
          return resolve(results);
        })
        .catch(error => {
          return reject(error);
        });
    });
  });
}

function readProjects(projectsFilepaths) {
  return new Promise((resolve, reject) => {
    promiseAllP(projectsFilepaths, (filePath, index, resolve, reject) => {
      fs.readFile(path.resolve(filePath), "utf-8", function(err, content) {
        if (err) return reject(err);
        let projectData = JSON.parse(content);
        projectData.local_path = filePath;
        return resolve(projectData);
      });
    })
      .then(result => {
        return resolve(result);
      })
      .catch(error => {
        return reject(error);
      });
  });
}

function removeFilenameFromPath(str) {
  const file = str.split("/").pop();
  return str.replace(file, "");
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

app.post("/api/append-icon", async (req, res) => {
  // 1. Get data from req (svgSource, projectName)
  const body = req.body;
  const projectPath = body.projectPath;
  const iconData = body.iconData;

  // 2. Read all data from json
  const projectData = await readSingleFile(path.resolve(projectPath))
    .then(items => items)
    .catch(err => console.log(err));

  let newProjectData = projectData;

  await svgo.optimize(iconData.source).then(({ data }) => {
    iconData.source_min = data;
  });

  // 3. Append new data to json
  newProjectData.icons.push(iconData);

  // 4. Save data to json
  fs.writeFile(
    path.resolve(path.resolve(projectPath)),
    JSON.stringify(newProjectData),
    err => {
      if (err) console.log("Error writing file:", err);
    },
  );

  // 5. return req
  return res.send({
    iconData,
    projectPath,
  });
});

app.post("/api/append-project", async (req, res) => {
  // 1. Get data from request
  const body = req.body;
  const projectData = body.projectData;

  // 2. Handle icon settings
  const newProjectFile = {
    id: projectData.id,
    name: projectData.name,
    filename: projectData.filename,
    icons: [],
  };

  // Create project file in directory
  await fs.writeFile(
    path.resolve(projectData.local_path + projectData.filename),
    JSON.stringify(newProjectFile),
    err => {
      if (err) console.log("Error writing file:", err);
    },
  );

  // 3. Handle local settings
  let settingsData = await readSingleFile("projects/projects.json")
    .then(fileContent => fileContent)
    .catch(err => console.log(err));

  settingsData.push(projectData);

  // 4. Save data to local settings file
  await fs.writeFile(
    path.resolve(__dirname, "projects/projects.json"),
    JSON.stringify(settingsData),
    err => {
      if (err) console.log("Error writing file:", err);
    },
  );

  // 5. return req
  return await res.send({
    projectData,
  });
});

app.post("/api/update-project", async (req, res) => {
  // 1. Get data from request
  const body = req.body;
  const projectData = body.projectData;

  let isProjectFilenameRenamed = false;

  // 2. Read settings file
  let settingsData = await readSingleFile("projects/projects.json")
    .then(fileContent => fileContent)
    .catch(err => console.log(err));

  const projectSettingsIndex = await settingsData.findIndex(
    projectSettings => projectData.id === projectSettings.id,
  );
  const projectSettingsName = settingsData[projectSettingsIndex].name;
  const projectSettingsLocalPath =
    settingsData[projectSettingsIndex].local_path;
  const projectSettingsFileName = settingsData[projectSettingsIndex].filename;

  // 3. Read project file
  let oldProjectData = await readSingleFile(
    path.resolve(projectSettingsLocalPath + projectSettingsFileName),
  )
    .then(projectContent => projectContent)
    .catch(err => console.log(err));

  // 4. Update settings file
  settingsData[projectSettingsIndex] = {
    ...settingsData[projectSettingsIndex],
    ...(projectData.name && { name: projectData.name }),
    ...(projectData.filename && { filename: projectData.filename }),
    ...(projectData.local_path && { local_path: projectData.local_path }),
  };

  // 4. Update project file
  const newProjectData = {
    ...oldProjectData,
    ...(projectData.name && { name: projectData.name }),
    ...(projectData.filename && { filename: projectData.filename }),
  };

  await fs.writeFile(
    path.resolve(__dirname, "projects/projects.json"),
    JSON.stringify(settingsData),
    err => {
      if (err) console.log("Error writing file:", err);
    },
  );

  if (projectData.local_path) {
    if (projectSettingsLocalPath !== projectData.local_path) {
      if (projectData.filename) {
        isProjectFilenameRenamed = true;
        await fs.writeFile(
          path.resolve(
            path.resolve(projectData.local_path + projectData.filename),
          ),
          JSON.stringify(newProjectData),
          err => {
            if (err) console.log("Error writing file:", err);
          },
        );
      } else {
        await fs.writeFile(
          path.resolve(
            path.resolve(projectData.local_path + projectSettingsFileName),
          ),
          JSON.stringify(newProjectData),
          err => {
            if (err) console.log("Error writing file:", err);
          },
        );
      }
      //Here remove old file path
      await fs.unlink(
        path.resolve(projectSettingsLocalPath + projectSettingsFileName),
        function(err) {
          if (err) throw err;
          console.log("File deleted.");
        },
      );
    } else {
      await fs.writeFile(
        path.resolve(
          path.resolve(projectSettingsLocalPath + projectSettingsFileName),
        ),
        JSON.stringify(newProjectData),
        err => {
          if (err) console.log("Error writing file:", err);
        },
      );
    }
  } else if (
    projectData.name &&
    !projectData.local_path &&
    !projectData.filename
  ) {
    await fs.writeFile(
      path.resolve(
        path.resolve(projectSettingsLocalPath + projectSettingsFileName),
      ),
      JSON.stringify(newProjectData),
      err => {
        if (err) console.log("Error writing file:", err);
      },
    );
  }

  if (projectData.filename && !isProjectFilenameRenamed) {
    await fs.unlink(
      path.resolve(projectSettingsLocalPath + projectSettingsFileName),
      function(err) {
        if (err) throw err;
        console.log("File deleted.");
      },
    );

    await fs.writeFile(
      path.resolve(
        path.resolve(projectSettingsLocalPath + projectData.filename),
      ),
      JSON.stringify(newProjectData),
      err => {
        if (err) console.log("Error writing file:", err);
      },
    );
  }

  // Create project file in directory

  return await res.send({
    projectData,
  });
});

app.post("/api/remove-project", async (req, res) => {
  // 1. Get data from request
  const body = req.body;
  const projectData = body.projectData;

  // 2. Remove file from filesystem based on localpath from request
  await fs.unlink(path.resolve(projectData.local_path), err => {
    if (err) throw err;
    console.log(projectData.name + " was deleted");
  });

  // 3. get and update settings file
  const settingsData = await readSingleFile("projects/projects.json").then(
    fileContent => fileContent,
  );

  const newSettingsData = settingsData.filter(projectSettings => {
    return projectData.id !== projectSettings.id;
  });

  // 4. Save data to local settings file
  await fs.writeFile(
    path.resolve(__dirname, "projects/projects.json"),
    JSON.stringify(newSettingsData),
    err => {
      if (err) console.log("Error writing file:", err);
    },
  );

  // 5. return req
  return await res.send({
    projectData,
  });
});

app.post("/api/upload-icon", async (req, res) => {
  // 1. Get data from req (svgSource, projectName)
  const body = req.body;
  const iconsData = body.icons;
  const projectPath = body.projectPath;

  let projectData;
  let failedIcons = [];

  // 2. Read all data from json
  projectData = await readSingleFile(path.resolve(projectPath))
    .then(items => items)
    .catch(err => console.log(err));

  // 3. Prepare icons from request to array
  for (let i = 0; i < iconsData.length; i++) {
    if (iconsData[i].filename && iconsData[i].name && iconsData[i].source) {
      let iconData = iconsData[i];
      await svgo.optimize(iconData.source).then(({ data }) => {
        iconData.source_min = data;
        projectData.icons.push(iconData);
      });
    } else {
      failedIcons.push(iconsData[i]);
    }
  }

  // 4. Save data to json
  await fs.writeFile(
    path.resolve(projectPath),
    JSON.stringify(projectData),
    err => {
      if (err) console.log("Error writing file:", err);
    },
  );

  // 5. return req
  return await res.send({
    failedIcons: failedIcons,
  });
});

app.post("/api/generate-sprite", async (req, res) => {
  const TEMP_FOLDER = "./__temp__";
  const TEMP_FOLDER_DIR = path.resolve(__dirname, TEMP_FOLDER);

  const body = req.body;
  const projectData = body.projectData;
  const projectPath = projectData.local_path;
  const projectPathWithoutFilename = removeFilenameFromPath(projectPath);

  // 1. Get project json
  const localProjectData = await readSingleFile(
    path.resolve(__dirname, projectPath),
  )
    .then(items => items)
    .catch(err => console.log(err));

  // 2. Create temp folder with all SVGs from JSON project for sprite generation
  if (!fs.existsSync(TEMP_FOLDER)) {
    await fs.mkdirSync(TEMP_FOLDER);
  }

  await localProjectData.icons.map(icon => {
    svgo.optimize(icon.source).then(({ data }) => {
      fs.writeFile(
        path.resolve(
          path.resolve(__dirname, TEMP_FOLDER + "/" + icon.filename),
        ),
        data,
        err => {
          if (err) console.log("Error writing file:", err);
        },
      );
    });
  });

  // 3. Load all SVGs into generator from temp folder

  await glob("**/*.svg", { cwd: TEMP_FOLDER_DIR }, async (err, files) => {
    // 4. Compile added SVGs into single svg sprite
    await asyncForEach(files, file => {
      spriter.add(
        new File({
          path: path.join(TEMP_FOLDER_DIR, file),
          base: TEMP_FOLDER_DIR,
          contents: fs.readFileSync(path.join(TEMP_FOLDER_DIR, file)),
        }),
      );
      spriter.compile((error, result, data) => {
        for (let mode in result) {
          for (let resource in result[mode]) {
            mkdirp.sync(
              path.dirname(
                path.resolve(
                  __dirname,
                  projectPathWithoutFilename + "icons.svg",
                ),
              ),
            );
            fs.writeFileSync(
              path.resolve(__dirname, projectPathWithoutFilename + "icons.svg"),
              result[mode][resource].contents,
            );
          }
        }
      });
    });

    // 5. Clear icons
    await fs.readdir(TEMP_FOLDER_DIR, async (err, files) => {
      if (err) throw err;
      for (const file of files) {
        await fs.unlink(path.join(TEMP_FOLDER_DIR, file), err => {
          if (err) throw err;
        });
      }
    });
  });

  // 6. Return result
  return await res.send({
    message: "Sprite successfully generated.",
  });
});

app.post("/api/remove-icon", async (req, res) => {
  // 1. Get data from req (svgSource, projectPath)
  const body = req.body;
  const iconData = body.iconData;
  const projectPath = body.projectPath;
  const iconName = body.iconData.name;

  // 2. Read all data from json
  const projectData = await readSingleFile(path.resolve(projectPath))
    .then(items => items)
    .catch(err => console.log(err));

  let newProjectData = projectData;

  const iconIndex = projectData.icons.findIndex(
    filteredIcon => filteredIcon.name === iconName,
  );

  // 3. Remove icon from to json
  newProjectData.icons.splice(iconIndex, 1);

  // 4. Save data to json
  fs.writeFile(
    path.resolve(path.resolve(projectPath)),
    JSON.stringify(newProjectData),
    err => {
      if (err) console.log("Error writing file:", err);
    },
  );

  // 5. return req
  return res.send({
    iconData,
    projectName: projectPath,
  });
});

app.get("/api/generate-library", async (req, res) => {
  /* let libraryJson = {
    "name": "Font Awesome 5 Solid",
    "filename": "fa-solid",
    "icons": []
  }; */

  let libraryJson = {
    name: "Material Design Icons",
    filename: "material-icons",
    icons: [],
  };

  await readIcons(path.resolve(__dirname, "icons/material-icons"))
    .then(items => (libraryJson.icons = items))
    .then(() => {
      fs.writeFile(
        path.resolve(__dirname, "libraries/material-icons.json"),
        JSON.stringify(libraryJson),
        err => {
          if (err) console.log("Error writing file:", err);
        },
      );
    })
    .catch(err => console.log(err));

  return await res.send({
    libraryJson,
  });
});

app.get("/api/init", async (req, res) => {
  const getSettings = new Promise((resolve, reject) => {
    fs.readFile(
      path.resolve(__dirname, "projects/projects.json"),
      "utf-8",
      (error, content) => {
        if (error) return error;
        return resolve(JSON.parse(content));
      },
    );
  });

  const settings = await getSettings;

  const projectPaths = settings.map(project => {
    return project.local_path + project.filename;
  });

  const projects = await readProjects(projectPaths);

  const libraries = await readLibraries(path.resolve(__dirname, "libraries"))
    .then(items => {
      const librariesLimit = req.query["libraries-limit"]
        ? req.query["libraries-limit"]
        : false;
      let librariesJson;

      librariesJson = items.map(libraryItem => {
        if (librariesLimit) {
          const icons = libraryItem.icons.filter((icon, index) => {
            if (index < librariesLimit) {
              return icon;
            }
          });
          libraryItem.icons = icons;
          return libraryItem;
        } else {
          return libraryItem;
        }
      });
      return librariesJson;
    })
    .catch(err => console.log(err));

  res.send({
    projects,
    libraries,
  });
});

let port = process.env.PORT;

if (!port) {
  port = 4000;
}

app.listen(port, () => {
  console.log("\x1b[36m%s\x1b[0m", `Icon-manager is running at port ${port}`);
});
