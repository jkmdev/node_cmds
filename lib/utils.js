var os = require('os');
var url = require('url');
var exec = require('child_process').exec;

exports.execute = function execute(command) {
  //return new Promise(exec(command));
  console.log(typeof exec(command));
};

exports.homeURL = function homeURL(directory) {
  var userName = os.userInfo().username;
  return new url.URL('file:///home/' + userName + '/' + directory + '/');
};
