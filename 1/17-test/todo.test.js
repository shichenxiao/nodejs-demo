#!/usr/bin/node

var assert = require('assert');
var Todo = require('./todo.js');

var todo = new Todo();
var testCompleted = 0;

deleteTest();
addTest();
throwTest();
doAsyncTest(function(){
  console.log('completed %d tests', testCompleted);
})

function deleteTest(){
  console.log('test delete function');
  todo.add('delete me');
  assert.equal(todo.getCount(),1,'1 item should exists');
  todo.deleteAll();
  assert.equal(todo.getCount(),0,'No items should exists');
  testCompleted++;
}
function addTest(){
  console.log('test add function');
  todo.deleteAll();
  todo.add('Added');
  assert.notEqual(todo.getCount(),0,'1 item should exists');
  assert.equal(todo.getCount(),1,'1 item should exists');
  testCompleted++;
}

function throwTest(){
  console.log('test add function');
  assert.throws(todo.add, /require/);
  testCompleted++;
}

function doAsyncTest(cb){
  console.log('test doAsyncTest function');
  todo.doAsync(function(value){
    assert(value,'callback should be passed true');
    testCompleted++;
    cb();
  });
}
