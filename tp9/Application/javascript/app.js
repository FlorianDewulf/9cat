$(document).ready(function() {
  $.base64.utf8encode = true;

  $("#connexionButton").on('click', function() {
    $("#loading").html("Connexion automatique en cours, veuillez patienter...")
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
    }).fail(function(msg) {
        $("#loading").html("La connexion a echoue");
    });
  });

  if ($.cookie('token') !== undefined) {
    $("#loading").html("Connexion automatique en cours, veuillez patienter...")
    loadProfile();
  }

  function to64(value) {
    return ($.base64.btoa(value));
  }

  function loadProfile() {
    $.ajax({
      method: "GET",
      url: "http://localhost:5000/userprofile",
      /*beforeSend : function(xhr) {
        // set header
        xhr.setRequestHeader("Authorization", $.cookie('token'));
      },*/
      headers: {
        "Authorization": $.cookie('token')
      },
      dataType : "json",
      contentType : "application/json"
    }).done(function( msg ) {
      $("#loginBox").remove();
      $("#infoBox").removeClass("hidden");
      $("#nameInfo").html(msg.user);
      $("#emailInfo").html(msg.mail);
    }).fail(function(msg) {
        $("#loading").html("La connexion a échoué");
    });
  }
});
