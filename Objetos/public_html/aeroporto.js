var txtmodelo, txtpassageiros, txtaltura, txtvelocidade;

document.addEventListener("DOMContentLoaded", function(){
    
    txtmodelo = document.getElementById("txtmodelo");
    txtpassageiros = document.getElementById("txtpassageiros");
    txtaltura = document.getElementById("txtaltura");
    txtvelocidade = document.getElementById("txtvelocidade");
    
    txtmodelo.value=1;
    txtpassageiros.value=2;
    txtaltura.value=3;
    txtvelocidade.value=4;
    nave.ver();
    document.addEventListener("onCrash", function(evt){
        evt = (evt)?evt:window.event;
        alert("Caiu o " + evt.detail.modelo + " com " + evt.detail.totalpassageiros + " passageiros.");
    });
    
});

var nave={
  criaevento: function(){
      var onDesastre = new CustomEvent("onCrash", {
          detail:{
            modelo: "Boeing747", //tb podia colocar this.modelo
            totalpassageiros: this.totalpassageiros
          },
          bubbles: true,
          cancelable: true
          
        }
      ); //fim objeto do customevent
      
      document.dispatchEvent(onDesastre);
      
  },
  modelo:"Boeing 747",
  totalpassageiros: 345, 
  altura: 0,
  velocidade: 0,
  ver: function(){
      txtmodelo.value = this.modelo;
      txtpassageiros.value = this.totalpassageiros;
      txtaltura.value = this.altura;
      txtvelocidade.value = this.velocidade;
  },
  sobidesce: function(delta){
      this.altura += parseInt(delta);
      if(this.altura <0) this.criaevento();
      
      this.ver();
  },
  
  setmodel: function(v){
      this.modelo="v";
      
  }  
};


  
  
  