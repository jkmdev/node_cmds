var os = require('os');
var url = require('url');
var exec = require('child_process').exec;

exports.urlFromHome = function urlFromHome(directory) {
  var userName = os.userInfo().username;
  return new url.URL('file:///home/' + userName + '/' + directory + '/');
};
