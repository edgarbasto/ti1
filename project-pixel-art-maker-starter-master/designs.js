// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//Global vars
var canvas;
var ctx;

$('#sizePicker').on('submit', function makeGrid(evt) {

//grabbing the values from the inputs
var alt = $('#input_height').val();
var larg = $('#input_width').val();

//check if height and width have the minimum values
// if (alt < 50 || alt > window.innerHeight) {
//   alert('Minimum Height is 50');
// }
// if (larg < 50 || larg > window.innerWidth) {
//   alert('Minimum Width is 50');
// }

//least common multiple
   



//setting the canvas with the user height&width
canvas = document.querySelector("canvas");
canvas.width = alt;
canvas.height = larg;
canvas.style.backgroundColor="#113388";
ctx = canvas.getContext("2d");

//drawing the lines to make the grid
for (var x = 0; x < larg+1; x+=50) {
  ctx.moveTo(x,0);
  ctx.lineTo(x, alt);
}

for (var y = 0; y < alt+1; y+=50){
    ctx.moveTo(0,y);
    ctx.lineTo(alt, y);
}

ctx.strokeStyle = "#ddd";
ctx.stroke();

//stopping the event consequence
evt.preventDefault();

});


$('canvas').on('click', function(evt){

//identifying the square/mouse position
  var rect = canvas.getBoundingClientRect();
  userX = (evt.clientX - rect.left) - (evt.clientX - rect.left)%50;
  userY = (evt.clientY - rect.top) - (evt.clientY - rect.top)%50;
//filling
  var leColour = $('#colorPicker').val();
  ctx.fillStyle = leColour;
  ctx.fillRect(userX,userY,50,50);

});
