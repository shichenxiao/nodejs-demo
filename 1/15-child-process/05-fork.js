#!/usr/bin/node

var cp = require('child_process');

console.log('I am father process. pid:',process.pid);

cp.fork('./02-child.js');

setTimeout(function(){
  console.log('father process is stopped!');
  process.exit(0);
},2000);
