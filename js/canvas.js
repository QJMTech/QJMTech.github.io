// find canvas on webpage
var canvas = document.querySelector('canvas');

// set size to full window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// setting up drawing capabilities
var c = canvas.getContext('2d');

c.fillRect(100, 100, 50, 50)

// test
console.log(canvas)