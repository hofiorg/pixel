var pixelsize = 5;
var delay = 10;

var x;
var y;
var last_x;
var last_y;

document.addEventListener("DOMContentLoaded", function()
{
  window.addEventListener('resize', resizeCanvas, false);
  resizeCanvas();
}, false);

function resizeCanvas() {
  var canvas = getCanvas();
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
}

function init() {
  var canvas = getCanvas();
  var context = getContext();
  context.fillStyle = "#000";
  context.fillRect(0, 0, canvas.width, canvas.height);
  x = canvas.width/2;
  y = canvas.height/2;
  draw();
}

function draw() {
  var context = getContext();
  context.fillStyle = getRandomColor();
  context.fillRect(x, y, pixelsize, pixelsize);

  randomXY();

  if(last_x == x && last_y == y)
    randomXY();

  last_x = x;
  last_y = y;

  setTimeout(draw, delay);
}

function randomXY() {
  var d = Math.floor((Math.random() * 4) + 1);
  if(d == 1) {
    x = x + pixelsize;
  }
  if(d == 2) {
    x = x - pixelsize;
  }
  if(d == 3) {
    y = y + pixelsize;
  }
  if(d == 4) {
    y = y - pixelsize;
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getCanvas() {
  return document.getElementById("canvas");
}

function getContext() {
  return getCanvas().getContext("2d");
}
