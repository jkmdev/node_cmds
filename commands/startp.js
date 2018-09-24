#!/usr/bin/env node
'use strict';

var fsProm = require('fs').promises;
var utils = require('../lib/utils.js');


fsProm.readdir(utils.homeURL('Projects'))
  .then((ret) => console.log(ret))
  .catch((err) => console.log(err));

var res = utils.execute("which atom");
console.log(res);
  // .then((output) => {console.log(output)})
  // .catch(() => {});

//console.log(output);
//utils.execute(output);

// var atom = "";
// execute("which atom");
//
// function execute(command) {
//   exec(command, function(error, stdout, stderr) {
//       atom = stdout;
//       console.log(atom);
//       //execute(atom);
//       if (error !== null) {
//           console.log('exec error: ' + error);
//       }
//   });
// }



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
