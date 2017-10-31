#!/usr/bin/node

var cp = require('child_process');

console.log('I am father process. pid:',process.pid);

var cat = cp.spawn('cat',['./message.txt']);
var sort = cp.spawn('sort');
var uniq = cp.spawn('uniq');

cat.stdout.pipe(sort.stdin);
sort.stdout.pipe(uniq.stdin);
uniq.stdout.pipe(process.stdout);
