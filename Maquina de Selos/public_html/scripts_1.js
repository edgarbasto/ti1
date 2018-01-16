


function maqselos() {
    
    var qnt = document.getElementById("compras").euros.value; 
    
    var mod5 = qnt%5;
    var s5 = parseInt(qnt/5);
    
    /* Tentativa de fazer uma função para o calculo 
    
    
    function detModS3() {
        
        var mod5mod3 = mod5%3;
        
        switch (true) {
            
            case (mod5mod3 = 0):
                var s3 = 1;
                var s5 = s5 - s3;
                return s5, s3;
            
            
            
        }
        
    }
   */
  
    switch (true) {

        case (mod5 === 0):
            
            var s5 = (qnt/5);
            
            alert("S5: " + s5);
            break;     
        
        case (mod5 === 1):
            
            var s5 = s5 - 1;
            var s3 = 2;
            
            alert("S5: " + s5 + " S3: " + s3);
            break;  
        
        case (mod5 === 2):
        
            var s5 = s5 - 2;
            var s3 = 4;
        
            alert("S5: " + s5 + " S3: " + s3);
            break;  
        
        case (mod5 === 3):
        
            var s5 = s5;
            var s3 = 1;
        
            alert("S5: " + s5 + " S3: " + s3);
            break;  
        
        case (mod5 === 4):
        
            var s5 = s5-1;
            var s3 = 3;
        
            alert("S5: " + s5 + " S3: " + s3);
            break; 
            
        default:
            alert("teste");


    } 

}
        
        