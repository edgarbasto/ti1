
var opA, opB, opC;
var imgA, imgB, imgC;
var squareA, squareB, squareC;
var animals = ["cat", "chicken", "cow", "dog", "dolphin", "donkey", "duck", "elephant", "goat", "horse", "mosquito", "seagull"];


function Animal(square) {
    this.randAnimal = function(){
        var randomNum = Math.floor((Math.random() * 12)+1);
        this.name = animals[randomNum];
        this.imgs = "imgs/" + this.name + ".jpeg";
        this.sounds = "sounds/" + this.name +".wav";
        animals.splice(randomNum,1);
//        this.randSquare();
        this.printPic();
        
    };
     
    this.name = "";
    this.imgs = "";
    this.sounds = "";
    this.imgLoc = square;
    
    
    this.printPic = function(){
        this.imgLoc.src = this.imgs;
    };
    this.playSound = function() {
        var audio = new Audio(this.sounds);
        audio.play();
    };
     
};



//var animal = {
//    randAnimal: function(){
//        var randomNum = Math.floor((Math.random() * 12)+1);
//        this.name = animals[randomNum];
//        this.imgs = "imgs/" + this.name + ".jpeg";
//        this.sounds = "sounds/" + this.name +".wav";
//        this.randSquare();
//        this.printPic();
//    },
//    randSquare: function(){
//        var randomNum = Math.floor((Math.random() * 3)+1);
//        switch(randomNum){
//            case 1:
//                this.square = opA;
//                this.imgLoc = imgA;
//                break;
//            case 2:
//                this.square = opB;
//                this.imgLoc = imgB;
//                break;
//            case 3:
//                this.square = opC;
//                this.imgLoc = imgC;
//                break;
//        }
//    },
//    
//    name: "",
//    imgs: "",
//    sounds: "",
//    square: "",
//    imgLoc: "",
//    
//    
//    printPic: function(){
//        this.imgLoc.src = this.imgs;
//    }
//     
//};

 function jogar(){
        squareA.randAnimal();
        squareB.randAnimal();
        squareC.randAnimal();
        
        var squareInGame = Math.floor((Math.random() * 3)+1);
        switch(squareInGame){
            case 1:
                correctAnswer = squareA;
                break;
            case 2:
                correctAnswer = squareB;
                break;
            case 3:
                correctAnswer = squareC;
                break;
                
        }
                
             
    };

function init(){
    
    opA = document.getElementById("opA");
    opB = document.getElementById("opB");
    opC = document.getElementById("opC");
    imgA = document.getElementById("imgA");
    imgB = document.getElementById("imgB");
    imgC = document.getElementById("imgC");
    
    squareA = new Animal(imgA);
    squareB = new Animal(imgB);
    squareC = new Animal(imgC);

    jogar();
    document.addEventListener("mouseover"), function(){
        
        
    };
//    
//    document.addEventListener("mouseover", function(evt){
//        evt = (evt)?evt:window.event;
//        alert("Caiu o " + evt.detail.modelo + " com " + evt.detail.totalpassageiros + " passageiros.");
//    });

}

document.addEventListener("DOMContentLoaded", init());

