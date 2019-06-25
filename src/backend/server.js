const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

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
  fs.writeFile(path.resolve(path.resolve(__dirname, 'projects/' + projectName)), JSON.stringify(newProjectData), (err) => {
     if (err) console.log('Error writing file:', err)
  });

  // 5. return req
  return res.send({
    iconData,
    projectName
  })
});

app.post('/api/remove-icon', async (req, res) => {
  // 1. Get data from req (svgSource, projectName)
  const body = req.body;
  const iconData = body.iconData;
  const projectName = body.projectName;
  const iconName = body.iconName;

  // 2. Read all data from json
  const projectData = await readSingleFile(path.resolve(__dirname, 'projects/' + projectName))
      .then(items => items)
      .catch(err => console.log(err));

  let newProjectData = projectData;

  const iconIndex = (projectData.findIndex((filteredIcon) => filteredIcon.name === iconName));

  console.log(iconIndex);

  // 3. Remove icon from to json
  //newProjectData.icons.push(iconData);

  return res.send({
    iconData,
    projectName
  });

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

