//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var express = require('express');


var app = express();
var server = http.createServer(app);

app.get('/', (req, res) => {
    res.json('hello world');
});

server.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});