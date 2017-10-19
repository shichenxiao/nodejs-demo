#!/usr/bin/node

var fs = require('fs');

var w = fs.watch(__dirname,console.log);

process.on('SIGINT',function(){
  w.close();

  console.log("unwatch the directory");
  console.log("Game over after ten seconds...");

  setTimeout(function(){
    process.exit();
  },10000);
});
