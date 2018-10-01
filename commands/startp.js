#!/usr/bin/env node --no-warnings
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
const {promisify} = require("es6-promisify");

//const atomCmd = "atom Projects/Node/reminder_bot/";
const atomCmd = "cd && atom Projects/";
const terminalCmd = "gnome-terminal --working-directory='Projects/Node/NodeCommands'";

function main() {

   var project = getProjectNameFromUser();

}
main();

function getProjectNameFromUser() {

  var dir = fs.readdirSync(utils.urlFromUserDir('Projects'));
  var input = getUserInput(dir, console.log);
  //var input = getUserInput(dir);

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



function getUserInput(directory, callback) {

    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    var projectType;
    var project;

    console.log('What project type?');

    utils.printDir(directory);

    rl.on("line", (answer) => {

      projectType = `${answer}`;

      if (isInDirectory(directory, projectType)) {

        var dir = fs.readdirSync(utils.urlFromProjectsDir(projectType));

        utils.printDir(dir);

        rl.question("What project? ", (answer) => {

          project = `${answer}`;

          if (isInDirectory(dir, project)) {
            var path = projectType + "/" + project;
            openApps(path);
            rl.close();
          } else {
            console.log("Incorrect Input");
          }

        });

      } else {
        console.log('Incorrect Input');
      }
    });

}


function isInDirectory(directory, input) {
  var valid = false;
  input = input.replace(/\r?\n|\r/g,"");
  directory.forEach(function(element) {
    if (element === input) valid = true;
  });
  return valid;
}

function openApps(path) {
  console.log('opening apps');
  //utils.openApp("cd ~ && atom Projects/Node/reminder_bot");
  utils.openApp(atomCmd + path);
  //utils.openApp(terminalCmd);
}
