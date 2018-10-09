var os = require('os');
var url = require('url');
var fs = require('fs');
const {promisify} = require("es6-promisify");
var exec = promisify(require('child_process').exec);

//common functions to be used across the command line applications

exports.urlFromUserDir = function urlFromUserDir(directory) {
  var userName = os.userInfo().username;
  return new url.URL('file:///home/' + userName + '/' + directory);
};

exports.urlFromProjectsDir = function urlFromProjectsDir(directory) {
  var userName = os.userInfo().username;
  return new url.URL('file:///home/' + userName + '/Projects/' + directory);
};

exports.returnDirectories = function returnDirectories(path, contents) {
  var arr = [];
  contents.forEach(function(element) {
    var url = exports.urlFromUserDir(path + '/' + element);
    if (isDirectory(url, element)) arr.push(element);
  });
  return arr;
}

exports.isInDirectory = function isInDirectory(directory, input) {
  var valid = false;
  input = input.replace(/\r?\n|\r/g,"");
  directory.forEach(function(element) {
    if (element === input) valid = true;
  });
  return valid;
}


exports.openApp = function openApp(location) {
  var chil = exec(location)
                .catch((err) => console.log(err));
}

function isDirectory (url, element) {
  if (element.indexOf(".") == 0) return false;
  return fs.statSync(url).isDirectory();
}
