$(document).ready(function() {
  username = "";

  $("#authentication").on("click", function() {
    if ($("#username").val() != "") {
      username = $("#username").val();
      $("#login").remove();
      authentication();
    }
  });


  function authentication() {
    var socket = io("http://localhost:3000");

    $("#sendButton").on("click", function() {
      if ($("#messageInput").val() != "") {
        socket.emit('chat message', $("#messageInput").val())
        $("#messageInput").val("");
      }
    });

    socket.emit('authentication', username);

    socket.on('chat message', function(msg){
      var html = "<li><p class='from'>" + msg.username + "</p><p class='msg'>" + msg.content + "</p>";
      $('#msg-container').append(html);
    });
  }
});
