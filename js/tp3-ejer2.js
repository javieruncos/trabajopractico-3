let ciudad = [];


function ciudades (){
    for(let i = 0 ; i <= ciudad.length;i++){
        let nombre = prompt('ingresa el nombre de una ciudad')
        ciudad.push(nombre)
        // ciudad.push("paris")

        document.write("<ul>")
        document.write("<li>"+ciudad[i]+"</li>")
        document.write("</ul>")
        document.write("<hr>")
        
        if(confirm('desea ingresar otro nombre de una ciudad')){
            
        }else{
            
            document.write("la longuitud del arreglo es;"+ ciudad.length)
            break
        }
    }
}


ciudades()

document.write("<ul>")
document.write("<li>"+ciudad[0]+"</li>")
document.write("<li>"+ciudad[3]+"</li>")
document.write("<li>"+ciudad[ciudad.length -1]+"</li>")
document.write("</ul>")

ciudad.push("paris")

document.write(ciudad)
document.write("<hr>")
document.write(ciudad[2])
document.write("<hr>")

ciudad.splice(2,1,"barcelona")
document.write(ciudad)

/*realize el ejercicio como una lista desordenada pero no logre recrearla fuera de un bucle por eso los ultomos items no se muestran como una lista es algo que tendre que practicar ,averiguar */ 