#!/usr/bin/env node
'use strict';

//creates textfile in user's Documents folder
//appends notes to said textfile from command line in any directory

var fs = require('fs');
var utils = require('../lib/utils.js');

var fileName = 'QUICKNOTE.txt';
const fileURL = utils.urlFromUserDir('Documents/' + fileName);
var appendText = '';

function main() {

  getTextFromArgs();

  if (appendText) {
    appendTextToFile();
  }

}
main();

function getTextFromArgs() {
  for (let j = 2; j < process.argv.length; j++) {
      appendText += process.argv[j] + " ";
  }
}

function appendTextToFile() {
  fs.appendFile(fileURL, appendText + '\n', function (err) {
    if (err) throw err;
    console.log(appendText + 'added to ' + fileName);
  });
}
