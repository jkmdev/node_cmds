#!/usr/bin/env node
'use strict';

var fs = require('fs');
var utils = require('../lib/utils.js');

var fileName = 'QUICKNOTE.txt';
const fileURL = utils.urlFromUserDir('Documents/' + fileName);

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
