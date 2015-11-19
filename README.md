# Arduino Code Snippet
Simple Interaction with Arduino over Sockets

##Dependencies

npm install johnny-five

npm install socket.io

npm install express

##Usage

Set your arduino up as such:

![alt tag](/images/Arduino_Setup.png)


Run Arduino-Server.js with **node Arduino-Server.js**

Point your browser to **localhost:8080**

Pressing the green button will send a message over the socket to communicate with sketch.js (a p5.js sketch)

The page's background should turn green, and send a message back to the arduino, lighting up the LED
