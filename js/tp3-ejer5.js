




let letras = ["A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M","Q","W","E","R","T","Y","U","I","O","P"]

function cadena (texto){
    for(let i = 0; i<texto.length;i++){
        if(letras.indexOf(texto[i]) !=  -1){
           console.log("contiene mayusculas")
            
        }else{
            console.log( "contiene solo minusculas")

        }



        
        
    }
}


(cadena("hola"))