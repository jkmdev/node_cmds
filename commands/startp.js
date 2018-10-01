#!/usr/bin/env node --no-warnings
'use strict';

var fs = require('fs');
var utils = require('../lib/utils.js');
var readlineSync = require('readline-sync');

const atomCmd = "cd && atom Projects/";
const terminalCmd = "cd && gnome-terminal --working-directory='Projects/'";

function main() {

  var path = getProjectPath();
  openApps(path);

}
main();

function getProjectPath(directory) {

    var directory = fs.readdirSync(utils.urlFromUserDir('Projects'));
    var projectType = getUserInput(directory, "What project type?");

    var projectDir = fs.readdirSync(utils.urlFromProjectsDir(projectType));
    var project = getUserInput(projectDir, "What project?");

    return projectType + "/" + project;

}

function getUserInput(directory, question) {

    var index = readlineSync.keyInSelect(directory, question);
    console.log('Ok, you selected ' + directory[index]);
    return directory[index];

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
  console.log('Opening apps.');
  utils.openApp(atomCmd + path);
  utils.openApp(terminalCmd + path);
  utils.openApp(terminalCmd + path);
}
