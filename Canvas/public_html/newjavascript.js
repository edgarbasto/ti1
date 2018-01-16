document.addEventListener("DOMContentLoaded", init);

var canvas;
var ctx;

function init(evt){
    canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.backgroundColor="#d3d3d3";
    ctx = canvas.getContext("2d");
    
   
    
//    ctx.fillStyle="Green";
//    ctx.fillRect(10,10,50,50);
//    
//    ctx.fillStyle="Yellow";
//    ctx.fillRect(100,100,50,50);
    
    /*
    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.moveTo(200,200);
    ctx.lineTo(100,300);
    ctx.lineTo(20,200);
    ctx.closePath();
    ctx.fillStyle="Blue";
    ctx.stroke();
    ctx.fill();
    
    ctx.fillStyle="Yellow";
    ctx.arc(250,250,100,0,Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle="Black";
    ctx.font = "30px Arial";
    ctx.fillText("Hello World",680,50);
    
    // Draw the face
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(95, 85, 40, 0, 2*Math.PI);
ctx.closePath();
ctx.fill();
ctx.lineWidth = 2;
ctx.stroke();
ctx.fillStyle = "black";

// Draw the left eye
ctx.beginPath();
ctx.arc(75, 75, 5, 0, 2*Math.PI);
ctx.closePath();
ctx.fill();

// Draw the right eye
ctx.beginPath();
ctx.arc(114, 75, 5, 0, 2*Math.PI);
ctx.closePath();
ctx.fill();

// Draw the mouth
ctx.beginPath();
ctx.arc(95, 90, 26, Math.PI, 2*Math.PI, true);
ctx.closePath();
ctx.fill();
    
//anda();    

//continuação com os vídeos do youtube

ctx.beginPath();
ctx.moveTo(40,40);
ctx.lineTo(400,60);
ctx.lineTo(60,400);
ctx.strokeStyle = "lightblue";
ctx.stroke();


//ctx.beginPath();
//ctx.arc(300,300, 30, 0, Math.PI * 2);
//ctx.strokeStyle = "pink";
//ctx.stroke();


for (var i=0; i<3; i++){
    
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    
    
    ctx.beginPath();
    ctx.arc(x,y, 30, 0, Math.PI * 2);
    ctx.strokeStyle = "Blue";
    ctx.stroke();
    ctx.fillStyle = getRandomColor();
    ctx.fill();
}
    
*/ 
 
  rodinhas.update();
 
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//var x=Math.random() * innerWidth;
//var y=Math.random() * innerHeight;
//var dx=(Math.random() - 0.5) * 8; 
//var dy=(Math.random() - 0.5) * 8;
//var radius = 30;

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this. radius = radius;
     
    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2);
        //ctx.strokeStyle = getRandomColor();
        ctx.stroke();   
    };
    this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - 100 < 0) this.dx=-this.dx;
        if(this.y+ this.radius > innerHeight || this.y - 100 < 0) this.dy=-this.dy;
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    };
}

var rodinhas = new Circle(200,200, 3, 33, 30);





function anda() {
    if(x + 100 > innerWidth || x - 100 < 0) dx=-dx;
    if(y+ 100 > innerHeight || y - 100 < 0) dy=-dy;
    ctx.clearRect(0,0,innerWidth, innerHeight);
    
   
    
    
    x+=dx;
    y+=dy;
    console.log("x:" + x + " y: " + y);
    ctx.beginPath();
    ctx.arc(x,y,100,0,Math.PI * 2);
    ctx.stroke();
    //ctx.fillStyle = getRandomColor();
    //ctx.fill();
    
    //if (x <500) 
    requestAnimationFrame(anda);
    
}