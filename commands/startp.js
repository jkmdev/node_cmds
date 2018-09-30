#!/usr/bin/env node
'use strict';

var fsProm = require('fs').promises;
var utils = require('../lib/utils.js');
const {promisify} = require("es6-promisify");
var exec = promisify(require('child_process').exec);

fsProm.readdir(utils.urlFromHome('Projects'))
  .then((ret) => console.log(''))
  .catch((err) => console.log(err));

exec("which atom")
  .then((ret) => openApp(ret));

var projectName =

openApp("gnome-terminal --working-directory='Projects/NodeCommands'");

function openApp(location) {
  exec(location);
}

//enter project folder in command line
//will open project with atom and two terminals


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
