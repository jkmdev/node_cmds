#!/usr/bin/env node
'use strict';

//opens project from command line globally
//creates instance of atom and two terminal windows, currently

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

function getProjectPath() {
  var projectType = getUserInput('Projects', "What project type?");
  var project = getUserInput('Projects/' + projectType, "What project?");
  return projectType + "/" + project;
}

function getUserInput(path, question) {
  var directoryContents = fs.readdirSync(utils.urlFromUserDir(path));
  var dir = utils.returnDirectories(path, directoryContents);
  var index = readlineSync.keyInSelect(dir, question);
  if (index == -1) process.exit(1);
  console.log('Ok, you selected ' + dir[index]);
  return dir[index];
}

function openApps(path) {
  console.log('Opening apps.');
  utils.openApp(atomCmd + path);
  utils.openApp(terminalCmd + path);
}
