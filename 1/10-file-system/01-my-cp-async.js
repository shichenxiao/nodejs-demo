#!/usr/bin/node

var fs = require('fs');

var src = process.argv[2];
var dst = process.argv[3];

//fs.createReadStream(src).pipe(fs.createWriteStream(dst));

fs.writeFile(dst,fs.readFile(src,function(err){
  if(err) console.log(err);
}),function(err){
  if(err) console.log(err);
});

fs.chmod(dst,fs.stat(src,function(err){
  if(err) console.log(err);
}).mode,function(err){
  if(err) console.log(err);
});
