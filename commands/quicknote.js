#!/usr/bin/env node
'use strict';

//creates textfile in user's Documents folder
//appends notes to said textfile from command line in any directory

var fs = require('fs');
var utils = require('../lib/utils.js');

var fileName = 'QUICKNOTE.txt';
const fileURL = utils.urlFromUserDir('Documents/' + fileName);


function main() {

  var appendText = getTextFromArgs();

  if (appendText) {
    appendTextToFile(appendText);
  }

}
main();

function getTextFromArgs() {
  var text = '';
  for (let j = 2; j < process.argv.length; j++) {
      text += process.argv[j] + " ";
  }
  return text;
}

function appendTextToFile(appendText) {
  fs.appendFile(fileURL, appendText + '\n', function (err) {
    if (err) throw err;
    console.log(appendText + 'added to ' + fileName);
  });
}
