#!/usr/bin/node

var http = require('http');
const{URL}=require('url');


var city = process.argv[2]||'石家庄';
var addr = 'http://api.jisuapi.com/weather/query?appkey=cf66e8d5ba26c183&city='+city;

http.get(new URL(addr),function(res){
  var result = '';
  res.on('data',function(data){
   result+= data.toString('utf-8');
  });
  res.on('end',function(){
    var weather = JSON.parse(result);
    console.log(weather);
  })
});

