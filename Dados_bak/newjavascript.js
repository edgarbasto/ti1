var txtjogador, txtmontante;
var myjogo;
function jogoBase(_jogador,_montante){
    this.jogador=_jogador;
    this.montante=_montante;
    this.ver= function(){
        txtjogador.value=this.jogador;
        txtmontante.value= this.montante;
    };
}

function jogoDoisDados(_jogador,_montante){
    this.onIguais=function(_sender ,_aposta){
         var meuevento=new CustomEvent( "oniguais",
            {
             detail:{
                 sender:_sender,
                 aposta:_aposta
             }, 
             bubbles:true,
             cancelable:true,
            }
        );
        document.dispatchEvent(meuevento);
    };//oniguais
       
   
    jogoBase.call(this,_jogador,_montante);
    this.dados=new Array(1,6);
    this.verjogo=function(){
        txtjogador.value=this.jogador;
        txtmontante.value=this.montante;
        document.getElementById("dado1").setAttribute("src",this.dados[0].toString() + ".png");
        document.getElementById("dado2").setAttribute("src",this.dados[1].toString() + ".png");
    };
    this.rolar=function(aposta){
      if(aposta <= this.montante){
          this.montante-=aposta;
          this.dados[0]=Math.floor(Math.random() * 6 )+1;
          this.dados[1]=Math.floor(Math.random() * 6 )+1;
          if(this.dados[0]===this.dados[1]){
              
              this.onIguais(this,aposta);
          }
          this.verjogo();
      }  
    };
 }
 
 jogoDoisDados.prototype =  new jogoBase();
 jogoDoisDados.prototype.constructor=jogoDoisDados;
 
document.addEventListener("DOMContentLoaded",function(){
    txtjogador= document.getElementById("txtjogador");
    txtmontante =document.getElementById("txtmontante");
    document.getElementById("btrolar").addEventListener("click", function(){
        document.getElementById("msg").innerHTML="";
      myjogo.rolar(100);
    });
    myjogo= new jogoDoisDados("Neves",2000);
    myjogo.verjogo();
    document.addEventListener("oniguais",function(evt){
        
        evt = (evt)?evt:window.event;
        
        var premio =evt.detail.sender.dados[0] * evt.detail.aposta*2;
        evt.detail.sender.montante +=premio;
        document.getElementById("msg").innerHTML="Parabéns sr:" + evt.detail.sender.jogador +
                 " ganhou " + premio;
        
    });
});
