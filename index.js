const circle = document.getElementsByClassName('circle');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const submit = document.getElementById('submit');

var len = circle.length;

const on = function() {
    for(var i=0; i < len; i++) {
        circle[i].removeAttribute("style");
        circle[i].style.animationPlayState = "running";
        circle[i].style.WebkitAnimationPlayState = "running";
    }
}
const off = function() {
    title.style.animation = "none";
  
    for (var i = 0; i < len; i++) {
      circle[i].style.animation = "none";
      circle[i].style.background = "#563260";
    }
  }

play.addEventListener('click', on);
stop.addEventListener('click', off);

const convert = function() {
    var speed = document.getElementById('quantity').value;
    for(let i=0;i<len;i++){
        circle[i].style.animationDuration = (6-speed) + 's';
    };
}

submit.addEventListener("click",convert)