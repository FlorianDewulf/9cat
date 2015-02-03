window.onload = function() {
  var timeout = undefined;
  var actif = true;

  function changeSlide() {
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
  }

  function clickEvent() {
    var clickable = document.getElementById("clickable").getElementsByTagName("div");

    for (var i = 0 ; i < clickable.length ; i++) {
      clickable[i].onclick = function(event) {
        clearInterval(timeout);
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
        timeout = setInterval(function(){
          changeSlide();
        }, 3000);
      }
    }
  }

  function eventButton() {
    var left = document.getElementById("left-arrow");
    var right = document.getElementById("right-arrow");

    right.onclick = function(event) {
      clearInterval(timeout);
      changeSlide();
      timeout = setInterval(function(){
        changeSlide();
      }, 3000);
    }

    left.onclick = function(event) {
      clearInterval(timeout);
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

      index--;
      if (index == -1)
        index = divs.length - 1;
      divs[index].className = "active"
      timeout = setInterval(function(){
        changeSlide();
      }, 3000);
    }
  }

  timeout = setInterval(function(){
    changeSlide();
  }, 3000);

  clickEvent();
  eventButton();
}
