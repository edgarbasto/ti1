function selos(){
    
    var s5,s3;
    var f = document.getElementById("frm");
    var quantia = parseInt(f.txtquantia.value);
    
    if (quantia >=8 ) {
        var quoc = parseInt(quantia /5);
        var resto = quantia % 5;


        switch (resto){

            case 0:
                s5=quoc;
                s3=0;
                break;

            case 1:
                s5=quoc-1;
                s3=2;
                break;

            case 2:
                s5=quoc-2;
                s3=4;
                break;

            case 3:    
                s5=quoc;
                s3=1;    
                break;
                
            case 4:
                s5=quoc-1;
                s3=3;
                break;

        }


        f.txts5.value = s5;
        f.txts3.value = s3;
    } else {
        alert("Erro, quantia mínima 8€!");
    }
    
    
}

