#!/usr/bin/env node
'use strict';

var fs = require('fs');
var os = require('os');
var url = require('url');

var userName = os.userInfo().username;

console.log('why');

var fileName = 'QUICKNOTE.txt';
const fileURL = new url.URL('file:///home/' + userName + '/Documents/' + fileName);

var appendText = '';

for (let j = 2; j < process.argv.length; j++) {
    appendText += process.argv[j] + " ";
}

if (appendText) {
  appendTextToFile();
}

function appendTextToFile() {
  fs.appendFile(fileURL, appendText + '\n', function (err) {
    if (err) throw err;
    console.log(appendText + 'added to ' + fileName);
  });
}

//dropbox-backup -> stores files in drop dropbox
//start-project projectname
  // -> starts up programs and terminal windows based off files
  // -> opens project folder with atom as well as two terminal windows
  // relative to project folder
