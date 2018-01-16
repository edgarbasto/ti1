var txtjogador, txtmontante;

function rodar(){
    d1 = Math.floor((Math.random() * 6)+1);
    d2 = Math.floor((Math.random() * 6)+1);
    
    document.getElementById("dado1").setAttribute("src", d1.toString() + ".png");
    document.getElementById("dado2").src = d2.toString() +".png";
    
    
};


function jogoBase(_jogador, _montante){
    this.jogador = _jogador;
    this.montante = _montante;
    this.ver= function(){
        txtjogador.value = this.jogador;
        txtmontante.value = this.montante;
    };
                
};

function jogoDoisDados(_jogador, _montante){
    jogoBase.call(this, _jogador, _montante);
    this.criadisparaevento = function(_sender, _aposta) {
      var myevento = new CustomEvent("oniguais",{
          detail: {
              sender: _sender,
              aposta: _aposta
          },
          bubbles: true,
          cancelable: true
      });
      
      document.dispatchEvent(myevento);  
    };
    this.dados = new Array(1,1);
    this.verjogo = function(){
        txtjogador.value = this.jogador;
        txtmontante.value = this.montante;
        document.getElementById("dado1").setAttribute("src", this.dados[0].toString() + ".png");
        document.getElementById("dado2").src = this.dados[1].toString() +".png";
        
    };
    
    this.jogar = function(_aposta){
        
        if (this.montante >= _aposta) {
            
            this.dados[0] = Math.floor((Math.random() * 6)+1);
            this.dados[1] = Math.floor((Math.random() * 6)+1);
            this.montante -=100;

            if (this.dados[0] === this.dados[1]) this.criadisparaevento(this, _aposta);
            
            this.verjogo();
            
        } else { 
            alert("acabou a guita!!");
        };    
            
    };
};

jogoDoisDados.prototype = new jogoBase();
jogoDoisDados.prototype.constructor=jogoDoisDados;


var myJogo;


document.addEventListener("DOMContentLoaded", function(){
    
    txtjogador = document.getElementById("txtjogador");
    txtmontante = document.getElementById("txtmontante");
    document.getElementById("bt1").addEventListener("click", function(){
                document.getElementById("msg").innerHTML = "";
        myJogo.jogar(100);
    });
    
    myJogo = new jogoDoisDados("Ana Lee", 2000);
    myJogo.montante += 100;
    myJogo.verjogo();
    document.addEventListener("oniguais", function(evt){
        evt = (evt)?evt:window.event;
        var premio = evt.detail.aposta * 2 * evt.detail.sender.dados[0];
        var msg = "Parabéns Sr. " + evt.detail.sender.jogador + " ganhou " + premio.toString() + "€ ";
        
        evt.detail.sender.montante += premio;
        
        document.getElementById("msg").innerHTML = msg;
        
        
    });

    /*
    myJogo2 = new jogoBase("Maria", 1000);
    setTimeout(function(){
        //alert("teste");
        myJogo2.ver();
    }, "3000");
    */
    
});



