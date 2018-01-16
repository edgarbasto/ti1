var txtarray, txtinputs, txtoutputs;
        
        

document.addEventListener("DOMContentLoaded", function(){
    
    
    txtarray = document.getElementById("txtarray");
    txtinputs = document.getElementById("txtinputs");
    txtoutputs = document.getElementById("txtoutputs");
    
    txtarray.value=1;
    txtinputs.value=2;
    txtoutputs.value=3;
    
});


function euromilhoes(){
    
    //var x = Array(5).fill(0); como criar logo o array com 5 caixas
    
    var numeros = new Array();
    var estrelas = new Array(2).fill(0);
    
   for(i=0; i<5; i++){
     
        numeros[i] = Math.floor(Math.random()*50)+1; 
        
        for (j=0; j<i; j++){
            
            if (numeros[j] === numeros[i]) {
                i--;
                break;
            }
            
        }
        
        
       
   }
   
   for(k=0; k<2; k++){
     
        estrelas[k] = Math.floor(Math.random()*12)+1; 
        
         for (j=0; j<k; j++){
            
            if (estrelas[j] === estrelas[k]) {
                k--;
                break;
            }
            
        }
       
   }
   
   //txtarray.value = numeros.sort(function(a, b){return a-b;}).join("-")+ " + " + estrelas.sort(function(a, b){return a-b;}).join("-");
   txtarray.value = numeros.sort(compara).join("-");
   txtinputs.value = estrelas.sort(compara).join("-");
   
}

function compara(a,b){
    return parseInt(a)-parseInt(b);
    
    //a-b ordena ascendente
    //b-a ordena descendente
    
}

function _pop() {
   
    var arr = txtarray.value.split("-");
        
    
    txtinputs.value = arr.pop();
    txtarray.value = arr.join("-");
   
}

function _push() {
    
    var arr = txtarray.value.split("-");
    var elem = parseInt(txtinputs.value);
    
    if(! isNaN(elem)) arr.push(elem);
    txtarray.value = arr.join("-");
    txtinputs.value = "";
    
}

// TPC fazer uma função com sift e unshift (introduz à esquerda)

function xpto(evt){
    
    evt=(evt) ? evt: window.event;
    evt.target.disable=true;
    evt.target.style.backgroundColor="red";
    
    var t = setInterval(function(){
        var d = new Date();
        txtoutputs.value = d.toLocaleTimeString();
        
    },1000);
    
    setTimeout(function(){
        clearInterval(t);
        evt.target.disable=false;
    evt.target.style.backgroundColor="green";
    },'3000');
    
    
}

function _slice(){
    var arr = txtarray.value.split("-");
    var novo = arr.slice(1,3);
    
    txtoutputs.value = novo.join("-");
   
   
}

function _splice(){
    var arr = txtarray.value.split("-");
    var novo = arr.splice(1,2,88,89,90);
    
    txtinputs.value = novo.join("-");
    txtoutputs.value = arr.join("-");
   
   
}


//function quadrado(y){return y*y;}
//quadrado(3);

// expressão lambda
//var f = (x)=>parseInt(x)*parseInt(x);
//alert(f(3));


/* MANEIRA CORRETA, CONTUDO PODE-SE IR BUSCAR DIRETAMENTE OS ARGUMENTOS AO HTML
function pares(){
    var arr = txtarray.value.split("-");
    var arrpar = arr.filter(x => parseInt(x)%2==0);
    txtinputs.value = arrpar.join("-");
    
    
} */


function pares(f){
    var arr = txtarray.value.split("-");
    var arrpar = arr.filter(f);
    txtinputs.value = arrpar.join("-");
    
    
}


function soma(){
    var arr = txtarray.value.split("-");
    var s=0;
    arr.forEach(function(v,i,a){
        s+=parseInt(v);
        
    });
    
    txtoutputs.value = s;
    
}

function quadrado(){
    var arr = txtarray.value.split("-");
    
    arr.forEach(function(v,i,a){
        a[i]=Math.pow(parseInt(v),2);
        
    });
    
    txtoutputs.value = arr.join("-");
    
}











