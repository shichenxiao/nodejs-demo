#!/usr/bin/node

var fs = require('fs');

var file = process.argv[2];

var fid = fs.openSync(file,'r');
console.log(fs.readFileSync(fid).toString('utf-8'));

fs.closeSync(fid);
