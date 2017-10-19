#!/usr/bin/node

console.log('start...');

var timeID=setInterval(loop,500);
timeID.unref();

function loop(){
  console.log('I will loop forver!');

}

setTimeout(function(loop){
  console.log('Game over!');

},5000)
