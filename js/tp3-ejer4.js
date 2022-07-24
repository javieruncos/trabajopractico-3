// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

let numeros = parseInt(prompt('ingresa un numero'));

function nombre(){

    if(numeros % 2 === 0){
        document.write("el numero ingresado es par")
    }else if(isNaN(numeros)){
        alert("no valido")

    }else{
        document.write("el numero ingresado es inpar")
    }
    
 
}


nombre();




// ejemplo numero 2 en bucle

// function numeros (){

//         for(let i = 0 ; i < 5;i++){
//            let numero=parseInt(prompt('ingresa un numero'));
//              if(numero % 2 === 0){
//         document.write("el numero ingresado es par: " + (numero)  + "<br>")
//      }else if(isNaN(numero)){
//         document.write("no valido")
//         break
//      }else{
//         document.write("el numero ingresado es inpar: " + (numero)  +"<br>")
//      }

//      if(confirm('desea ingresar otro numero')){
        
//      }else{
//        break
//      }
    
//   
//         }


    
//     }

// numeros()





// ejemplo numero 3

// function parOinpar (numero){
//     if(numero % 2 === 0){
//                 document.write("el numero ingresado es par: " + (numero)  + "<br>")
//              }else if(isNaN(numero)){
              
//              }else{
//                 document.write("el numero ingresado es inpar: " + (numero)  +"<br>")
//              }
                 

// }


// parOinpar(6)