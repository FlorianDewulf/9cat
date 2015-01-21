window.onload = function() {
  var timeout = undefined;

  function changeSlide() {
    var timeout_tmp = timeout;
    var divs = document.getElementById("caroussel-block").getElementsByTagName("div");
    var index = 0;

    for (var i = 0 ; i < divs.length ; i++) {
      if (divs[i].className == "active") {
        index = i;
        var move = divs[i];
        move.className = "moveback";
        setTimeout(function(){
          move.className = "";
        }, 600);
      }
    }

    index++;
    if (index == divs.length)
      index = 0;
    divs[index].className = "active"
    if (typeof timeout !== "undefined" && timeout_tmp == timeout) {
      setTimeout(function(){
        changeSlide();
      }, 3000);
    }
  }

  function clickEvent() {
    var clickable = document.getElementById("clickable").getElementsByTagName("div");

    for (var i = 0 ; i < clickable.length ; i++) {
      clickable[i].onclick = function(event) {
        var nb = event.currentTarget.getAttribute("data-id");
        var divs = document.getElementById("caroussel-block").getElementsByTagName("div");

        for (var i = 0 ; i < divs.length ; i++) {
          if (divs[i].className == "active" && i != nb) {
            index = i;
            var move = divs[i];
            move.className = "moveback";
            setTimeout(function(){
              move.className = "";
            }, 600);
          }
        }
        divs[nb].className = "active";
      }
    }
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      changeSlide();
    }, 3600);
  }

  timeout = setTimeout(function(){
    changeSlide();
  }, 3000);

  clickEvent();
}
