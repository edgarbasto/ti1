document.addEventListener("DOMContentLoaded", init);

var canvas;
var ctx;

function init(evt){
    canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.backgroundColor="#d3d3d3";
    ctx = canvas.getContext("2d");
   
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this. radius = radius;
     
    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2);        
        ctx.strokeStyle = "Blue";
        ctx.stroke(); 

//        //EPILEPSIA MODE = OFF
//        ctx.strokeStyle = getRandomColor();
//        ctx.fillStyle = getRandomColor();
//        ctx.stroke();
//        ctx.fill();
    };
    this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0) this.dx=-this.dx;
        if(this.y+ this.radius > innerHeight || this.y - this.radius < 0) this.dy=-this.dy;
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    };
};



var circleArray = [];
for (var i = 0; i< 100; i++) {
    var radius = 30;
    var x=Math.random() * (innerWidth - radius * 2) + radius;
    var y=Math.random() * (innerHeight - radius * 2) + radius;
    var dx=(Math.random() - 0.5); 
    var dy=(Math.random() - 0.5);
    
    circleArray.push(new Circle(x,y,dx,dy,radius));
//    var rodinhas = new Circle(200,200, 3, 3, 30);
};


function anda() {
    requestAnimationFrame(anda);
    ctx.clearRect(0,0,innerWidth, innerHeight);
    for (var i=0; i < circleArray.length; i++) {
      circleArray[i].update();  
    };
        
};

anda();
