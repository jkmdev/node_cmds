#!/usr/bin/env node
'use strict';

var minimist = require('minimist');
var fs = require('fs');
var os = require('os');
var url = require('url');

console.log(url.URL);

const args = minimist(process.argv.slice(2));

var appendText = args.a;
var newText = args.n;

var userName = os.userInfo().username;

var fileName = 'QUICKNOTES.txt';
const fileURL = new url.URL('file:///home/' + userName + '/Documents/' + fileName);

if (appendText) {
  appendTextToFile();
} else if (newText) {
  createNewFile();
}

function appendTextToFile() {
  fs.appendFile(fileURL, appendText + "\n", function (err) {
    if (err) throw err;
    console.log('"' + appendText + '" added to ' + fileName);
  });
}

function createNewFile() {
  fs.writeFile(fileURL, newText, function (err) {
    if (err) throw err;
    console.log('New ' + fileName + ' created. "' + newText + '" added to file.');
  });
}

//issue-393
