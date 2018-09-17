#!/usr/bin/env node
'use strict';

var minimist = require('minimist');
var fs = require('fs');

const args = minimist(process.argv.slice(2));

var appendText = args.a;
var newText = args.n;

var fileName = 'QUICKNOTES.txt';

if (appendText) {
  appendTextToFile();
} else if (newText) {
  createNewFile();
}

function appendTextToFile() {
  fs.appendFile(fileName, appendText + "\n", function (err) {
    if (err) throw err;
    console.log('"' + appendText + '" added to ' + fileName);
  });
}

function createNewFile() {
  fs.writeFile(fileName, newText, function (err) {
    if (err) throw err;
    console.log('New ' + fileName + ' created. "' + newText + '" added to file.');
  });
}

//happyhome?
//hurryhome?
//herrahome?
