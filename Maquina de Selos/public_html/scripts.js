


function maqselos() {
    
    var qnt = document.getElementById("compras").euros.value; 
    
    var R5 = qnt%5;
    var s5 = parseInt(qnt/5);
    var k = 0;
    
  
    switch (true) {

        case (qnt < 8):
            alert("Por favor introduza a quantia mínima de 8€.");
            break;
        
        case (R5 === 0):
            
            document.getElementById("qntS5").value = s5;
            
            //alert("S5: " + s5);
            break;     
        
        case (R5 !== 0 && R5%3 === 0 ):
            
            var s5 = parseInt(qnt/5);
            var s3 = R5/3;
            
            
            document.getElementById("qntS5").value = s5;
            document.getElementById("qntS3").value = s3;
            
            //alert("S5: " + s5 + " S3: " + s3);
            break;  
        
        case (R5 !== 0):
            do {
                k = k + 5;
                s3 = (R5+k)/3;
                s5 = parseInt(qnt/5) - (k/5);
                
            } while ((R5+k)%3 !== 0);
            
            document.getElementById("qntS5").value = s5;
            document.getElementById("qntS3").value = s3;
            
            //alert("S5: " + s5 + " S3: " + s3);
            break;  
        
                    
        default:
            alert("erro");


    } 

}
        
        