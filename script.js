const hourEl = document.querySelector(".hour");
const secondEl = document.querySelector(".second");
const minuteEl = document.querySelector(".minute");

function uddatetime() {
  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  var hours = (h / 12) * 360;
  var minutes = (m / 60) * 360;
  var seconds = (s / 60) * 360;

  hourEl.style.transform = `rotate(${hours}deg)`;
  minuteEl.style.transform = `rotate(${minutes}deg)`;
  secondEl.style.transform = `rotate(${seconds}deg)`;
}

setInterval(uddatetime, 1000);
