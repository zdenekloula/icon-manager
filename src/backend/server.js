const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { promisify } = require('util');

const app = express();

app.use(cors());
app.use(bodyParser.json());


function promiseAllP(items, block) {
  var promises = [];
  items.forEach(function(item,index) {
      promises.push( function(item,i) {
          return new Promise(function(resolve, reject) {
              return block.apply(this,[item,index,resolve,reject]);
          });
      }(item,index))
  });
  return Promise.all(promises);
}

function readFiles(dirname) {
  return new Promise((resolve, reject) => {
      fs.readdir(dirname, function(err, filenames) {
          if (err) return reject(err);
          promiseAllP(filenames, (filename,index,resolve,reject) =>  {
              fs.readFile(path.resolve(dirname, filename), 'utf-8', function(err, content) {
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


app.get('/api/init', async (req, res) => {
  let projects;
  let libraries;

  await readFiles('projects/')
    .then(items => projects = items)
    .catch(err => console.log(err));

  await readFiles('libraries/')
    .then(items => libraries = items)
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

app.listen(port, () =>
  console.log(`Server running at port ${port}`)
);

