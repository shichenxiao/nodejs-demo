#!/usr/bin/node

var fs = require('fs');

var src = process.argv[2];
var dst = process.argv[3];

//fs.createReadStream(src).pipe(fs.createWriteStream;

fs.writeFileSync(dst,fs.readFileSync(src));

fs.chmodSync(dst,fs.statSync(src).mode);


