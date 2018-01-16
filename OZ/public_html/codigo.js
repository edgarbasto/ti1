

function inicia(arg) {
    
    document.getElementById("tit").innerHTML= arg;  
  
    
}



    
function xpto() {
    var y;
    var t;
    y = 0;
    var t = setInterval(function(){
        y++;
        document.getElementById("tit").innerHTML= y; 
        if (y===5)clearInterval(t);
        
    },1000); //setInterval

    setTimeout(alert('xpto'),5000);    
    
} //xpto

var alfa = [1,2,3,4];
var bravo = new Array(5,6,7,8);

function verArray(nome) {
    
    var arr=eval(nome);

    document.getElementById("txt1").value = arr.join("-");
        
}

function _push(){
        
    var arr = eval(document.getElementById("escolha").value);
    var elemento = document.getElementById("txt2").value;
    arr.push(elemento);
    verArray(document.getElementById("escolha").value);      
    
}


