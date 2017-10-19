#!/usr/bin/node

var fs=require('fs');

var http=require('http');

var mine='image/jpg';
var data=fs.readFileSync('./nodejs-logo.jpg').toString('base64');
var uri="data:"+mine+";base64"+data;

//console.log('base64',uri);

var html='<!DOCTYPE html>\n<html>\n<body>\n<img alt="nodejs-logo" src="'+uri+'"\>\n</body>\n</html>';

http.createServer(function(req,res){
  console.log(req.headers);
  res.end(html);
}).listen(8080);
