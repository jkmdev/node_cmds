var os = require('os');
var url = require('url');
const {promisify} = require("es6-promisify");
var exec = promisify(require('child_process').exec);

//common functions to be used across the command line applications

exports.urlFromUserDir = function urlFromUserDir(directory) {
  var userName = os.userInfo().username;
  return new url.URL('file:///home/' + userName + '/' + directory);
};

exports.urlFromProjectsDir = function urlFromProjectsDir(directory) {
  var userName = os.userInfo().username;
  return new url.URL('file:///home/' + userName + '/Projects/' + directory + '/');
};

exports.printDir = function printDir(directory) {
  directory.forEach(function(element) {
    if (isFolder(element)) {
      console.log("\t" + element);
    }
  });
}

exports.openApp = function openApp(location) {
  exec(location)
    .catch((err) => console.log(err));
}

function isFolder(element) {
  return element.indexOf(".") != -1 ? false : true;
}
