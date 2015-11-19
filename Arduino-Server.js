var express = require('express'),
    app = express(),
    http = require('http'),
    fs = require('fs'),
    five = require('johnny-five');

app.use(express.static(__dirname));

app.get('/', function(req,res){
  res.send('Hello');
})

server = http.createServer(app);
io = require('socket.io').listen(server);

server.listen(8080);

board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  var button = new five.Button(8);

  io.sockets.on('connection', function (socket) {
    button.on('press', function(){
      socket.emit('button');
    });

    socket.on('pressed', function(){
      console.log('LED');
      led.on();
    });
  }); 
});