let ciudad = []

for(let i = 0; i <= ciudad.length;i++){

    let nombres = prompt('ingresa el nombre de una ciudad');
     if(!isNaN(nombres)){
        alert('novalido')
        break
    }
    
    ciudad.push(nombres);
    
    document.write("<ul>")
    document.write("<li>"+ciudad[i]+"</li>")
    document.write("</ul>")
    
    
    
    
    if(confirm('desea agregar mas nombres de ciudadese?')){
        
    }else{
        document.write("la longuitud del arreglo es " + ciudad.length)
        document.write("<hr>")

        document.write("<ul>")
        document.write("<li>"+ciudad[0]+"</li>")
        document.write("<li>"+ciudad[3]+"</li>")
        document.write("<li>"+ciudad[ciudad.length -1]+"</li>")
        document.write("</ul>")

        document.write("<hr>")
        ciudad.push("paris")
        document.write(ciudad[2])
        
        break
        
    }
    
}



// for(let i = 0; i <= ciudad.length;i++){

//     let nombres = prompt('ingresa el nombre de una ciudad');
//      if(!isNaN(nombres)){
//         alert('novalido')
//         break
//     }
    
//     ciudad.push(nombres);
    
//     document.write("<ul>")
//     document.write("<li>"+ciudad[i]+"</li>")
//     document.write("</ul>")

    
    
    
//     if(confirm('desea agregar mas nombres de ciudadese?')){
        
//     }else{
//         document.write("la longuitud del arreglo es " + ciudad.length)
//         document.write("<hr>")
//         document.write("<ul>")
//         document.write("<li>"+ciudad[0]+"</li>")
//         document.write("<li>"+ciudad[3]+"</li>")
//         document.write("<li>"+ciudad[ciudad.length -1]+"</li>")
//         document.write("</ul>")
//         break
        
//     }
    
// }


