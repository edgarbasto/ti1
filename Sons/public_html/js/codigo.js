
var opA, opB, opC;
var imgA, imgB, imgC;
var squareA, squareB, squareC;
var animals = ["cat", "chicken", "cow", "dog", "dolphin", "donkey", "duck", "elephant", "goat", "horse", "mosquito", "seagull"];


function Animal(square) {
    this.randAnimal = function(){
        var randomNum = Math.floor((Math.random() * animals.length));
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
    this.audio;
    
    
    this.printPic = function(){
        this.imgLoc.src = this.imgs;
    };
    this.playSound = function() {
        this.audio = new Audio(this.sounds);
        this.audio.play();
    };
    
    this.stopSound = function() {
        this.audio.stop();
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
        $('.midEd').css("background", "white");
        
        var squareInGame = Math.floor((Math.random() * 3)+1);
        var correctSquare;
        switch(squareInGame){
            case 1:
                correctAnswer = squareA;
                correctSquare = 'opA';
                break;
            case 2:
                correctAnswer = squareB;
                correctSquare = 'opB';
                break;
            case 3:
                correctAnswer = squareC;
                correctSquare = 'opC';
                break;        
        }
  
        $('.midEd').mouseover(function(evt){
            correctAnswer.playSound();
            $(this).css("background", "lightgreen");
            $(this).bind("mouseout", function(){
                $(this).css("background", "white");
                correctAnswer.audio.pause();
            });
        });
        
        $('.midEd').click(function(){
            if( String((this).id) === correctSquare){   
                $('.midEd').unbind('mouseover');
                $('.midEd').unbind('mouseout');
                $(this).css("background", "lightgreen");
                $('.midEd').not(this).css("background", "#FFA3A3");
                alert("Parabéns adivinhou.");
            } else {
                alert("Resposta errada, tente novamente.");
            };
         });          
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
    
//    Elaborar este evento para criar novo jogo. Atenção que ele fica baralhado com os binds e unbinds.
//    $('#butJogar').click(function(){
//        jogar();
//    });
//


}

document.addEventListener("DOMContentLoaded", init());

