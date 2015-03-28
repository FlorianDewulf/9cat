$(document).ready(function() {
  $.base64.utf8encode = true;

  $("#connexionButton").on('click', function() {
    $.ajax({
      method: "POST",
      url: "http://localhost:5000/authorize",
      data: JSON.stringify({ username: $("#nameInput").val(), password: to64($("#passwordInput").val()) }),
      dataType : "json",
      contentType : "application/json"
    }).done(function( msg ) {
      if (msg.token) {
        $.cookie('token', msg.token);
        loadProfile();
      }
    });
  });

  if ($.cookie('token') !== undefined) {
    loadProfile();
  }

  function to64(value) {
    return ($.base64.btoa(value));
  }

  function loadProfile() {
    $.ajax({
      method: "GET",
      url: "http://localhost:5000/userprofile",
      data: { token: $.cookie('token') },
      dataType : "json",
      contentType : "application/json"
    }).done(function( msg ) {
      $("#loginBox").remove();
      $("#infoBox").removeClass("hidden");
      $("#nameInfo").html(msg.user);
      $("#emailInfo").html(msg.mail);
    });
  }
});
