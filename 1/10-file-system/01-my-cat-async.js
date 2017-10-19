#!/usr/bin/node

var fs = require('fs');

var file = process.argv[2];

fs.readFile(file,function(err,buf){
  if(err){
    console.log(er.message);
    process.exit(1);
  }else{
    console.log(buf.toString('utf-8'));
  }
})
