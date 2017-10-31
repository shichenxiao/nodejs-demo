#!/usr/bin/node

var cp = require('child_process');

console.log('I am father process. pid:',process.pid);

var child = cp.fork('./05-ipc-child.js');

child.on('message',function(msg){
  console.log('message from child:',msg);
});

setTimeout(function(){
  child.send('I am father process. pid:'+process.pid);
  process.exit(0);
},2000);
