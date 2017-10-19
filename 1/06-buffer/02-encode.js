#!/usr/bin/node

var name=process.argv[2];
var password=process.argv[3];

console.log('name',name);
console.log('password',password);

var buf=new Buffer(name+':'+password);
console.log('user name and psaaword',buf.toString());
console.log('user name and password',buf.toString('base64'));
console.log('user name and password',buf.toString('hex'));
