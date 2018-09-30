var os = require('os');
var url = require('url');

exports.urlFromUserDir = function urlFromUserDir(directory) {
  var userName = os.userInfo().username;
  return new url.URL('file:///home/' + userName + '/' + directory);
};

exports.urlFromProjectsDir = function urlFromProjectsDir(directory) {
  var userName = os.userInfo().username;
  return new url.URL('file:///home/' + userName + '/Projects/' + directory + '/');
};
