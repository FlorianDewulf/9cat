displayPosition = function(position) {
  $("#coordonnee").html("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
}

displayError = function(error) {
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}

launchGeoloc = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayPosition, displayError);
  } else {
    alert("Geolocation is not supported by this browser");
  }
}

toFloat = function(str) {
  if (isNaN(parseFloat(str))) {
    return 0;
  } else {
    return parseFloat(str);
  }
}

$(document).ready(function() {
  launchGeoloc();
  var calc = null;
  var number = "";
  var futur_function = null;
  var wasclear = false;

  $("span").each(function() {
    $(this).click(function() {
      try {
        if ($(this).attr("data-type") === "attribute") {
          if (($(this).attr("data-item") === "." && number.indexOf(".") == -1) || ($(this).attr("data-item") !== "."))
            number += $(this).attr("data-item");
          $("#result").html(number);
        } else {
          if (number == "" && calc == null) {
            return;
          }

          if (calc == null && $(this).attr("data-item") != "negative") {
            calc = new Calculatrice(toFloat(number));
          }
          if (wasclear == true) {
            calc.result = toFloat(number);
            wasclear = false;
          }

          if (futur_function != null && $(this).attr("data-item") != "negative" &&
            $(this).attr("data-item") != "getMemory" && $(this).attr("data-item") != "setMemory") {
            calc[futur_function](toFloat(number));
            futur_function = null;
          }
          if ($(this).attr("data-item") == "sin" || $(this).attr("data-item") == "cos" ||
              $(this).attr("data-item") == "tan" || $(this).attr("data-item") == "resultat" ||
              $(this).attr("data-item") == "factorielle") {
            calc[$(this).attr("data-item")]();
          } else if ($(this).attr("data-item") == "clear") {
            number = "";
            futur_function = null;
            calc.clear();
            wasclear = true;
            $("#result").html(number);
            return;
          } else if ($(this).attr("data-item") == "negative") {
            number = (toFloat(number) * -1).toString();
            $("#result").html(number);
            return;
          } else if (calc != null && $(this).attr("data-item") == "setMemory") {
            calc.setMemory((number != "") ? toFloat(number) : undefined);
            return;
          } else if (calc != null && $(this).attr("data-item") == "getMemory") {
            number = calc.getMemory().toString();
            if (futur_function == null) {
              $("#result").html(number);
            } else {
              calc[futur_function](toFloat(number));
              futur_function = null;
              number = "";
              $("#result").html(calc.resultat());
            }
            return;
          } else if ($(this).attr("data-item") != "setMemory" && $(this).attr("data-item") != "getMemory") {
            futur_function = $(this).attr("data-item");
          }
          number = "";
          $("#result").html(calc.resultat());
        }
      } catch (e) {
        $("#error").html(e.message);
        number = "";
        futur_function = null;
        $("#result").html(calc.resultat());
      }
    });
  });
});
