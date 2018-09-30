#!/usr/bin/env node
'use strict';

//opens default workspace for javascript-based projects
//user is prompted to select the project they want to on
//a text editor and two command line windows will then open the project
//when atom closes, the terminals close too
//assumes a Project folder exists in the user's directory
  //in the future the project folder can be set on the command line

var fsProm = require('fs').promises;
var utils = require('../lib/utils.js');

const atomCmd = "atom Projects";
const terminalCmd = "gnome-terminal --working-directory='Projects/Node/NodeCommands'";

function main() {
  var projectName = getProjectNameFromUser();
  // var readline = require('readline');
  //
  // var rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout,
  //   terminal: false
  // });
  //
  // rl.on('line', function (cmd) {
  //   console.log('You just typed: '+cmd);
  // });

  utils.openApp(atomCmd);
  utils.openApp(terminalCmd);
}
main();



function getProjectNameFromUser() {

  fsProm.readdir(utils.urlFromUserDir('Projects'))
      .then((ret) => {
        console.log("Select project type: ");
        //utils.printDir(ret);
        getUserInput(ret);
      })
      .then ((ret) => {
        console.log('???');
      })
      .catch((err) => console.log(err));

}

function isFolder(element) {
  return element.indexOf(".") != -1 ? false : true;
}

function getUserInput(directory) {
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null && isValidInput(directory, `${chunk}`)) {
      process.stdout.write(`You entered: ${chunk}`);
      return true;
    } else {
      console.log('Invalid input, try again.');
      process.stdin.resume();
    }
  });
}

function isValidInput(directory, input) {
  var valid = false;
  input = input.replace(/\r?\n|\r/g,"");
  directory.forEach(function(element) {
    if (element === input) valid = true;
  });
  return valid;
}
