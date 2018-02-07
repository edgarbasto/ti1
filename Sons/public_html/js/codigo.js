
var opA, opB, opC;
var imgA, imgB, imgC;
var squareA, squareB, squareC;
var pontos = 0;
var animals = ["Gato", "Galinha", "Vaca", "Cão", "Golfinho", "Burro", "Pato", "Elefante", "Ovelha", "Cavalo", "Mosquito", "Gaivota"];
var sons = ["O Gato mia.", "A Galinha cacareja.", "A Vaca muge.", "O Cão ladra.", "O Golfinho emite um som sob a forma de clique ou estalido.", "O Burro zurra.", "O Pato grasna.", "O Elefante barre.", "A Ovelha bale.", "O Cavalo relincha.", "O Mosquito zumbe.", "A Gaivota grasna ou pipila."];


function Animal(square) {
    this.randAnimal = function(){
        var randomNum = Math.floor((Math.random() * animals.length));
        this.name = animals[randomNum];
        this.desc = sons[randomNum];
        this.imgs = "imgs/" + this.name + ".jpeg";
        this.sounds = "sounds/" + this.name +".wav";
        animals.splice(randomNum,1);
        sons.splice(randomNum,1);
        this.printPic();
        
    };
     
    this.name = "";
    this.desc = "";
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


 function jogar(){
        squareA.randAnimal();
        squareB.randAnimal();
        squareC.randAnimal();
        $('.midEd').css("background", "#DFDCE3");
       
        $('#titA').text(squareA.name);
        $('#titB').text(squareB.name);
        $('#titC').text(squareC.name);
        $('#txtA').text("");
        $('#txtB').text("");
        $('#txtC').text("");
        
        animals = ["Gato", "Galinha", "Vaca", "Cão", "Golfinho", "Burro", "Pato", "Elefante", "Ovelha", "Cavalo", "Mosquito", "Gaivota"];
        sons = ["O Gato mia.", "A Galinha cacareja.", "A Vaca muge.", "O Cão ladra.", "O Golfinho emite um som sob a forma de clique ou estalido.", "O Burro zurra.", "O Pato grasna.", "O Elefante barre.", "A Ovelha bale.", "O Cavalo relincha.", "O Mosquito zumbe.", "A Gaivota grasna ou pipila."];
        
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
            $(this).css("background", "#4ABDAC");
            $(this).bind("mouseout", function(){
                $(this).css("background", "#DFDCE3");
                correctAnswer.audio.pause();
            });
        });
        
        $('.midEd').click(function(evt){
            if( String((this).id) === correctSquare){   
                $('.midEd').unbind('mouseover');
                $('.midEd').unbind('mouseout');
                $('.midEd').unbind('click');
                $(this).css("background", "#4ABDAC");
                $('.midEd').not(this).css("background", "#FC4A1A");
                $('#txtA').append(squareA.desc);
                $('#txtB').append(squareB.desc);
                $('#txtC').append(squareC.desc);
                pontos += 1;
                $('#pontos').text("Pontos: " + pontos);
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
    

}

document.addEventListener("DOMContentLoaded", init());

