#!/usr/bin/node

var EventEmitter = require('events').EventEmitter;

function MusicPlayer(track){
  this.track = track;
  this.playing=false;
  this.events={
    play:'play';
    stop:'stop';
  };

  for(var methodName in EventEmitter.prototype){
   // console.log(methodName);
    this[methodName]=EventEmitter.prototype[methodName];
  }
}

MusicPlayer.prototype={
  toString:function(){
    if(this.playing){
      return 'Now Playing'+this.track;
    }else{
      return 'stopped';
    }
  }
}

var musicPlayer = new MusicPlayer('storm');

musicPlayer.on(e.play,function(){
  this.playing=true;
  console.log('\n',this.toString());
});

musicPlayer.on(e.stop,function(){
  this.playing=false;
  console.log('\n',this.toString());
});
//musicPlayer.on('error',function(err){
 // console.log(err);
 // process.exit(1);
//});

//process.on('uncaughtException',function(err){
  //console.log(err);
 // process.exit(1);
//});
musicPlayer.emit(e.play);

setTimeout(function(){
  musicPlayer.emit(e.stop);
},2000);

//setTimeout(function(){
  //musicPlayer.emit('error',new Error('WRONG!'));
//},3000);
