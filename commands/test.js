#!/usr/bin/env node
'use strict';

console.log('oooo works');
//
var cp = require("child_process");
cp.exec("./commands/test.js", function(error,stdout,stderr) {
  console.log("hmmm");
});

process.exit(0); // exit this nodejs process
