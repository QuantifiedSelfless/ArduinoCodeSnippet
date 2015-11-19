
 var socket = io.connect('http://localhost:8080');

function setup() {
    background(255,255,255);
    var canv = createCanvas(windowWidth,windowHeight);
    //canv.parent("bgCanvas");
}

function draw() {
}

socket.on('button', function(){
    console.log("Button Press Received!");
    console.log("EXCUSE ME?");
    background(0,0,0);
    console.log('PRESSED!');
    socket.emit('pressed');

  })