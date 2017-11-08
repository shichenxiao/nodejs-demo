#!/usr/bin/node

var http = require('http');
var url = require('url');

var msg = process.argv[2] ||"hello!";

var options = url.parse('http://localhost:8080');
options.method='post';
console.log('options:',options);

var req = http.request(options,function(res){
  console.log('status:',res.statusCode);
  console.log('headers:',res.headers);
  console.log('');

  res.setEncoding('utf-8');
  res.on('data',function(data){
    console.log('body:',data);
  });
}).on('error',function(err){
  console.log('something wrong with request:',err.message);
});

req.write(msg+'\n');
req.end();
