
function iniciar(){
    
    // querySelectorAll, posso ver CSSselectors no W3 schools
    var divs = document.querySelectorAll('div');
    Array.from(divs).forEach(function(v,i,a){
       a[i].addEventListener("click", function(evt){
           evt = (evt)?evt:window.event;
           
           alert(evt.type + " - " + evt.target.id + " - " + evt.currentTarget.id + " - " + evt.clientX + " - " + evt.offsetX);
           //evt.preventDefault();
           //if(evt.currentTarget.id=="blue")evt.stopPropagation();
            if(evt.currentTarget.id==evt.target.id)evt.stopPropagation();
           
       }, false); 
        
    });
    
}

document.addEventListener("DOMContentLoaded", iniciar);

/* MINHA MANEIRA
function alfa(evt){
   
   var caixa = document.getElementById('txt');
   
   caixa.addEventListener("keypress", function(){
          evt = (evt)?evt:window.event;
          alert("text alert");
      
       
   }, false);
   */
  
  
function alfa(evt){
    evt = (evt)?evt:window.event;
    //alert(evt.key + ' - ' + evt.keyCode);
    if(evt.keyCode < 48 || evt.keyCode > 57) evt.preventDefault();
    
}

