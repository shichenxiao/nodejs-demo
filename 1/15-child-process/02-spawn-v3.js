#!/usr/bin/node

var cp = require('child_process');
var http = require('http');

console.log('I am listening on 8080');

http.createServer(function(req,res){
  var child = cp.spawn('./02-child.js');
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
}).listen(8080);
