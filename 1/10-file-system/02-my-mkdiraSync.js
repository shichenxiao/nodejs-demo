#!/usr/bin/node

var fs = require('fs');

var dir = process.argv[2];

fs.mkdir(dir,function(err){
   console.log(err); 
});
  

//fs.mkdirSync(dir);
