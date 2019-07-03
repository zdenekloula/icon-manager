const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const SVGO = require('svgo');
const mkdirp = require('mkdirp');
const File = require('vinyl');
const glob = require('glob');
const SVGSpriter = require('svg-sprite');

const spriter = new SVGSpriter({
  dest: 'out',
  mode: {
    inline: true,
    symbol: true,
    defs: true,
  },
  shape: { // SVG shape related options
    id: { // SVG shape ID related options
      generator: function(name, file) {
        const nameWithoutExtension = name.split('.').slice(0, -1).join('.');
        return 'icon-' + nameWithoutExtension;
      },
    },
    "transform": [],
  }
});

const svgo = new SVGO({
  plugins: [
    {
      inlineStyles: {
        onlyMatchedOnce: false
      }
    },
    {
      removeDimensions: true
    },
    {
      removeViewBox: false
    },
    {
      cleanupEnableBackground: true
    }
  ]
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('build'))

function promiseAllP(items, block) {
  var promises = [];
  items.forEach(function (item, index) {
    promises.push(function (item, i) {
      return new Promise(function (resolve, reject) {
        return block.apply(this, [item, index, resolve, reject]);
      });
    }(item, index))
  });
  return Promise.all(promises);
}

function readSingleFile(filePath) {
  return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf-8', function (err, content) {
        if (err) return reject(err);
        const data = JSON.parse(content);
        return resolve(data);
      });
  });
}

function readFiles(dirname) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, function (err, filenames) {
      if (err) return reject(err);
      promiseAllP(filenames, (filename, index, resolve, reject) => {
        fs.readFile(path.resolve(dirname, filename), 'utf-8', function (err, content) {
          if (err) return reject(err);
          const data = JSON.parse(content);
          const outputData = {filename, ...data};
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
    fs.readdir(dirname, function (err, filenames) {
      if (err) return reject(err);
      promiseAllP(filenames, (filename, index, resolve, reject) => {
        fs.readFile(path.resolve(dirname, filename), 'utf-8', function (err, content) {
          if (err) return reject(err);
          const name = filename.split('.').slice(0, -1).join('.');
          const outputData = {filename, name, source: content};
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

app.post('/api/append-icon', async (req, res) => {
  // 1. Get data from req (svgSource, projectName)
  const body = req.body;
  const iconData = body.iconData;
  const projectName = body.projectName;

  // 2. Read all data from json
  const projectData = await readSingleFile(path.resolve(__dirname, 'projects/' + projectName))
      .then(items => items)
      .catch(err => console.log(err));

  let newProjectData = projectData;

  // 3. Append new data to json
  newProjectData.icons.push(iconData);

  // 4. Save data to json
  fs.writeFile(
    path.resolve(path.resolve(__dirname, 'projects/' + projectName)), 
    JSON.stringify(newProjectData), (err) => {
     if (err) console.log('Error writing file:', err)
    }
  );

  // 5. return req
  return res.send({
    iconData,
    projectName
  })
});


app.post('/api/generate-sprite', async (req, res) => {
  const TEMP_FOLDER = './__temp__';
  const TEMP_FOLDER_DIR = path.resolve(__dirname, TEMP_FOLDER);

  // 1. Get project json

  const projectData = await readSingleFile(path.resolve(__dirname, 'projects/nzip.json'))
      .then(items => items)
      .catch(err => console.log(err));

  // 2. Create temp folder with all SVGs from JSON project for sprite generation

  if (!fs.existsSync(TEMP_FOLDER)){
      await fs.mkdirSync(TEMP_FOLDER);
  }
  
  await projectData.icons.map(icon => {

    //This needs to be tested with custom weird output icons

    svgo.optimize(icon.source).then(({data}) => {
      fs.writeFile(
        path.resolve(path.resolve(__dirname, TEMP_FOLDER + '/' + icon.filename)), 
        data, 
        (err) => {
          if (err) console.log('Error writing file:', err)
        }
      );
    });

  });

  // 3. Load all SVGs into generator from temp folder

  await glob.glob('**/*.svg', { cwd: TEMP_FOLDER_DIR }, function (err, files) {
    files.forEach(function (file) {
      // Create and add a vinyl file instance for each SVG
      spriter.add(new File({
          path: path.join(TEMP_FOLDER_DIR, file),
          base: TEMP_FOLDER_DIR,
          contents: fs.readFileSync(path.join(TEMP_FOLDER_DIR, file))
      }));

      spriter.compile(function (error, result, data) {
          for (let mode in result) {
            for (let resource in result[mode]) {
              mkdirp.sync(path.dirname(result[mode][resource].path));
              fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
            }
          }
      });
    })
  });
  
  // 4. Compile added SVGs into single svg sprite 

  // 5. Clear icons

  /* fs.readdir(TEMP_FOLDER, (err, files) => {
    if (err) throw err;
  
    for (const file of files) {
      fs.unlink(path.join(TEMP_FOLDER, file), err => {
        if (err) throw err;
      });
    }
  }); */

  // 6. Return result
  return await res.send('done?');
});

app.post('/api/upload-icon', async (req, res) => {
  // 1. Get data from req (svgSource, projectName)
  const body = req.body;
  const iconsData = body.icons;
  const projectName = body.projectName;
  
  let projectData;
  let failedIcons = [];

  // 2. Read all data from json
  projectData = await readSingleFile(path.resolve(__dirname, 'projects/' + projectName))
      .then(items => items)
      .catch(err => console.log(err));

  // 3. Prepare icons from request to array
  for(let i = 0; i < iconsData.length; i++) {
    if(iconsData[i].filename && iconsData[i].name && iconsData[i].source) {
      let iconData = iconsData[i];
      await svgo.optimize(iconData.source).then(({data}) => {
        iconData.source = data;
        projectData.icons.push(iconData);
      });
    } else {
      failedIcons.push(iconsData[i]);
    }
  }

  // 4. Save data to json
  await fs.writeFile(path.resolve(__dirname, 'projects/' + projectName), JSON.stringify(projectData), (err) => {
    if (err) console.log('Error writing file:', err)
  });

  // 5. return req
  return await res.send({
    "failedIcons": failedIcons
  })
});

app.post('/api/remove-icon', async (req, res) => {
  // 1. Get data from req (svgSource, projectName)
  const body = req.body;
  const iconData = body.iconData;
  const projectName = body.projectName;
  const iconName = body.iconData.name;

  // 2. Read all data from json
  const projectData = await readSingleFile(path.resolve(__dirname, 'projects/' + projectName))
      .then(items => items)
      .catch(err => console.log(err));

  let newProjectData = projectData;

  const iconIndex = projectData.icons.findIndex((filteredIcon) => filteredIcon.name === iconName);

  // 3. Remove icon from to json
  newProjectData.icons.splice(iconIndex, 1);

  // 4. Save data to json
  fs.writeFile(path.resolve(path.resolve(__dirname, 'projects/' + projectName)), JSON.stringify(newProjectData), (err) => {
    if (err) console.log('Error writing file:', err)
  });

  // 5. return req
  return res.send({
    iconData,
    projectName
  })
});

app.get('/api/generate-library', async (req, res) => {
  /* let libraryJson = {
    "name": "Font Awesome 5 Solid",
    "filename": "fa-solid",
    "icons": []
  }; */

  let libraryJson = {
    "name": "Material Design Icons",
    "filename": "material-icons",
    "icons": []
  };

  await readIcons(path.resolve(__dirname, 'icons/material-icons'))
      .then(items => libraryJson.icons = items)
      .then(() => {
        fs.writeFile(path.resolve(__dirname, 'libraries/material-icons.json'), JSON.stringify(libraryJson), (err) => {
          if (err) console.log('Error writing file:', err)
        })
      })
      .catch(err => console.log(err));

  return await res.send({
    libraryJson
  })
});

app.get('/api/init', async (req, res) => {
  let projects;
  let libraries;

  await readFiles(path.resolve(__dirname, 'projects'))
      .then(items => projects = items)
      .catch(err => console.log(err));

  await readFiles(path.resolve(__dirname, 'libraries'))
      .then(items => {
        const librariesLimit = req.query["libraries-limit"] ? req.query["libraries-limit"] : false;
        let librariesJson;

        librariesJson = items.map(libraryItem => {
          if(librariesLimit) {
            const icons = libraryItem.icons.filter((icon, index) => {
              if(index < librariesLimit) {
                return icon
              }
            });
            libraryItem.icons = icons;
            return libraryItem
          } else {
            return libraryItem
          }
        });

        libraries = librariesJson
      })
      .catch(err => console.log(err));

  return await res.send({
    projects,
    libraries
  })
});

let port = process.env.PORT;

if (!port) {
  port = 4000;
}

app.listen(port, () =>{
  console.log('\x1b[36m%s\x1b[0m', `Icon-manager is running at port ${port}`)
});

