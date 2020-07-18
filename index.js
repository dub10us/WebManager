const http = require('http');
const fs = require('fs');
const opn = require('open');
const hostname = '127.0.0.1';
const port = 3000;
/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

let settingsPath = 'src/settings/settings.json';
let filepath = '';
let filename = 'SocialMedia.json';

let path = filepath +filename;

function loadSettings(settingsPath){
  let rawdata = fs.readFileSync(settingsPath);
  let settings = JSON.parse(rawdata);
  filepath = settings.profileFolder;
  path = filepath + filename;
  console.log(settings);
  console.log(filepath);
}

function openSites(filepath){
    let list='';
    fs.readFile(filepath, (err, data) => {
        if (err) throw err;
       let raw = JSON.parse(data);
       list = raw.uriArray;
        console.log(list);
        for (const item of list) {  
          console.log(`opening site: ${item}`);
          opn(item);
        }
    });

    
    console.log('This is after the read call');

}

loadSettings(settingsPath);
openSites(path);



