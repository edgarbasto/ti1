
var opA, opB, opC;
var imgA, imgB, imgC;
var animals = ["cat", "chicken", "cow", "dog", "dolphin", "donkey", "duck", "elephant", "goat", "horse", "mosquito", "seagull"];


function Animal() {
    this.randAnimal = function(){
        var randomNum = Math.floor((Math.random() * 12)+1);
        this.name = animals[randomNum];
        this.imgs = "imgs/" + this.name + ".jpeg";
        this.sounds = "sounds/" + this.name +".wav";
        this.randSquare();
        this.printPic();
    },
    this.randSquare = function(){
        var randomNum = Math.floor((Math.random() * 3)+1);
        switch(randomNum){
            case 1:
                this.square = opA;
                this.imgLoc = imgA;
                break;
            case 2:
                this.square = opB;
                this.imgLoc = imgB;
                break;
            case 3:
                this.square = opC;
                this.imgLoc = imgC;
                break;
        }
    },
    
    this.name = "";
    this.imgs = "";
    this.sounds = "";
    this.square = "";
    this.imgLoc = "";
    
    
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

function init(){
    opA = document.getElementById("opA");
    opB = document.getElementById("opB");
    opC = document.getElementById("opC");
    imgA = document.getElementById("imgA");
    imgB = document.getElementById("imgB");
    imgC = document.getElementById("imgC");

    animal.randAnimal();
    console.log(animal.name);
    console.log(animal.square);
    console.log(animal.imgLoc);
//    animal.printPic();
}

document.addEventListener("DOMContentLoaded", init());

