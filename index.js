var http = require('http');

var http = require('http');
var dt = require('./mymod.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);

console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');