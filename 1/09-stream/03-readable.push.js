#!/usr/bin/node

var Readable=require('stream').Readable;

var fs=new Readable();

rs.push('hello ');
rs.push('stream\n');
rs.push(null);

rs.pipe(process.stdout);