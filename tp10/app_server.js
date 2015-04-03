var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var users = [];
var sockets = [];

io.on('connection', function(socket){
  socket.on('authentication', function(msg){
    if (typeof(msg) !== "undefined" && msg != "") {
      var index = 0;
      tmpUsername = msg;
      while (users.indexOf(tmpUsername) != -1) {
        tmpUsername = msg + index;
        index++;
      }
      users.push(tmpUsername);
      sockets.push(socket);
      io.emit("chat message", {username: "ChatBot", content: tmpUsername + " vient de se connecter"});
    }
  });
  socket.on('chat message', function(msg){
    if (typeof(msg) !== "undefined") {
      io.emit("chat message", {username: users[sockets.indexOf(socket)], content: msg});
    }
  });

  socket.on('disconnect', function(){
    if (sockets.indexOf(socket) != -1) {
      io.emit("chat message", {username: "ChatBot", content: users[sockets.indexOf(socket)] + " vient de se déconnecter"});
      users.splice(sockets.indexOf(socket), 1);
      sockets.splice(sockets.indexOf(socket), 1);
    }
  });
});


http.listen(3000);
