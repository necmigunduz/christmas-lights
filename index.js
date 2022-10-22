const circle = document.getElementsByClassName("circle");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const submit = document.getElementById("submit");
const title = document.getElementById("title");

console.log(title);

var len = circle.length;

const on = function () {
  title.removeAttribute("style");
  title.style.animationPlayState = "running";
  title.style.WebkitAnimationPlayState = "running";
  for (var i = 0; i < len; i++) {
    circle[i].removeAttribute("style");
    circle[i].style.animationPlayState = "running";
    circle[i].style.WebkitAnimationPlayState = "running";
  }
};
const off = function () {
  title.style.animation = "none";

  for (var i = 0; i < len; i++) {
    circle[i].style.animation = "none";
    circle[i].style.background = "#563260";
  }
};

const convert = function () {
  const speed = document.getElementById("quantity").value;
  for (let i = 0; i < len; i++) {
    circle[i].style.animationDuration = 11 - speed + "s";
  }
};
submit.addEventListener("click", convert);
play.addEventListener("click", on);
stop.addEventListener("click", off);
