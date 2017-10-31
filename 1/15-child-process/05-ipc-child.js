#!/usr/bin/node

var cp = require('child_process');

console.log('I am child process. pid:',process.pid);

process.on('message',function(msg){
  console.log('message from father:',msg);
});

process.send('I am child process. pid:'+process.pid);
