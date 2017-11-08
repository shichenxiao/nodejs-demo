#!/usr/bin/node

var https = require('https');
var url =require('url');


var user = process.argv[2] || 'shichenxiao';
var addr = 'https://api.github.com/search/repositories?q=user:'+user;

var options = url.parse(addr);
options.method = "GET";
options.headers={
  'User-Agent':'shichenxiao'
};

https.get(options,function(res){
  var result = '';
  res.on('data',function(data){
   result+= data.toString('utf-8');
  });
  res.on('end',function(){
    var message = JSON.parse(result);
    console.log(message);
  });

});

