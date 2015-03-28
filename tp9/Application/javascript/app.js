$(document).ready(function() {
  $.base64.utf8encode = true;

  $("#connexionButton").on('click', function() {
    $.ajax({
      method: "POST",
      url: "localhost:5000/authorize",
      data: { username: $("#nameInput").val(), password: to64($("#passwordInput").val()) }
    }).done(function( msg ) {
      console.log(msg);
    });
  });

  function to64(value) {
    return ($.base64.btoa(value));
  }
});