// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

let numeros = parseInt(prompt('ingresa un numero'));

function nombre(numeros){

    if(numeros % 2 === 0){
        document.write("el numero ingresado es par")
    }else{
        document.write("el numero ingresado es inpar")
    }
    
    while(isNaN(numeros)){
        alert('no valido')
        break
    }
}


nombre(numeros);

