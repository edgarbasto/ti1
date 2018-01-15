
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
    this.imgLoc = "img" + square;
    
    
    this.printPic = function(){
        this.imgLoc.src = this.imgs;
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
     
    };

function init(){
    
    opA = document.getElementById("opA");
    opB = document.getElementById("opB");
    opC = document.getElementById("opC");
    imgA = document.getElementById("imgA");
    imgB = document.getElementById("imgB");
    imgC = document.getElementById("imgC");
    
    squareA = new Animal("A");
    squareB = new Animal("B");
    squareC = new Animal("C");

    jogar();
//    animal.randAnimal();
//    console.log(animal.name);
//    console.log(animal.square);
//    console.log(animal.imgLoc);
//    animal.printPic();
}

document.addEventListener("DOMContentLoaded", init());

