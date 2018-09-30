#!/usr/bin/env node
'use strict';

//opens default workspace for javascript-based projects
//user is prompted to select the project they want to on
//a text editor and two command line windows will then open the project
//when atom closes, the terminals close too
//assumes a Project folder exists in the user's directory
  //in the future the project folder can be set on the command line

var fs = require('fs');
var fsProm = require('fs').promises;
var utils = require('../lib/utils.js');
var readline = require('readline');

const atomCmd = "atom Projects";
const terminalCmd = "gnome-terminal --working-directory='Projects/Node/NodeCommands'";

function main() {

   var project = getProjectNameFromUser();
   console.log('here');
    //utils.openApp(atomCmd);
    //utils.openApp(terminalCmd);
}
main();

function getProjectNameFromUser() {

  var dir = fs.readdirSync(utils.urlFromUserDir('Projects'));
  utils.printDir(dir);
  var input = getUserInput(dir);

    // fsProm.readdir(utils.urlFromUserDir('Projects'))
    //     .then((directory) => {
    //       console.log("Select project type: ");
    //       getUserInput(directory)
    //         .then((ret) => resolve(ret));
    //     })
    //     .then ((ret) => {
    //       console.log('???');
    //     })
    //     .catch((err) => console.log(err));
}



function getUserInput(directory) {

    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });

    rl.on('line', function (cmd) {
      console.log('You just typed: '+cmd);
      if (isValidInput(directory, cmd)) return cmd;
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
