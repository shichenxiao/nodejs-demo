#!/usr/bin/node

var cp = require('child_process');

console.log('I am father process,pID=',process.pid);
console.log('cat 01-exec-file.js\n');

cp.execFile('cat',['01-exec-file.js'],function(err,stdout,stderr){
  if(err) console.log(err);

  console.log(stdout);
});
