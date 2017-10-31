#!/usr/bin/node

var cp = require('child_process');

console.log('I am father process. pid:',process.pid);

var child = cp.spawn('./02-child.js',[],{detached:true,stdio:['ignore',1,2]});

//child.stdout.pipe(process.stdout);
//child.stderr.pipe(process.stderr);
//
child.unref();

setTimeout(function(){
  console.log('father process is stopped!');
  process.exit(0);
},5000);
