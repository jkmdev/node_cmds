#!/usr/bin/env node
'use strict';

var fsProm = require('fs').promises;
var utils = require('../lib/utils.js');
const {promisify} = require("es6-promisify");
var exec = promisify(require('child_process').exec);

const atomCmd = "atom Projects";
const terminalCmd = "gnome-terminal --working-directory='Projects/Node/NodeCommands'";

//if projects directory doesn't exist, it creates one

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

  openApp(atomCmd);
  openApp(terminalCmd);
}
main();



function getProjectNameFromUser() {

  fsProm.readdir(utils.urlFromUserDir('Projects'))
      .then((ret) => {
        console.log("Select project type: ");
        //printDir(ret);
        getUserInput(ret);
      })
      .then ((ret) => {
        console.log('???');
      })
      .catch((err) => console.log(err));

}

function printDir(directory) {
  directory.forEach(function(element) {
    if (isFolder(element)) {
      console.log("\t" + element);
    }
  });
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

function openApp(location) {
  exec(location)
    .catch((err) => console.log(err));
}

//enter project folder in command line
//will open project with atom and two terminals
//when atom closes, the terminals close too

//Starts environment for existing project

//startp projectname
  // -> starts up programs and terminal windows based off files
  // -> opens project folder with atom as well as two terminal windows
  // relative to project folder

//prints names of current projects
  // Type of project:
    //1. Angular
    //2. node

//from your choice, the following projects are available
