let sumas = [];
  let contador = 0;
  let contador3 = 0;
  let contador4 = 0;
  let contador5 = 0;
  let contador6 = 0;
  let contador7 = 0;
  let contador8 = 0;
  let contador9 = 0;
  let contador10 = 0;
  let contador11 = 0;
  let contador12 = 0;
 


for(let i = 0; i < 50 ; i++){
  let dado1 = Math.floor(Math.random()*(6 - 1 + 1)+1);
  let dado2 = Math.floor(Math.random()*(6 - 1 + 1)+1);
  let resultado = dado1 + dado2;
  sumas.push(resultado);
  

     switch(sumas[i]){
       case 2: 
         contador++
         break
         
       case 3: 
         contador3++
         break
         case 4: 
         contador4++
         break
         case 5: 
         contador5++
         break
         case 6: 
         contador6++
         break
         case 7: 
         contador7++
         break
         case 8: 
         contador8++
         break
         case 9: 
         contador9++
         break
         case 10: 
         contador10++
         break
         case 11: 
         contador11++
         break
         case 12: 
         contador12++
         break
         
        }
        
        
        
        
      }
      
      
      document.write("resultado sumas: "+ sumas+"<br>")
        
      document.write(`<table>
      <tbody>`)
      document.write(`<tr>
                     <td>numero</td>
                     <td>apariciones</td>
                     </tr>`
                    )
      document.write(`<tr> 
                     <td>2</td> 
                     <td>${contador}</td> 
                     </tr>`
                    )
      document.write(`<tr> 
                     <td>3</td> 
                     <td>${contador3}</td> 
                     </tr>`
                    )
      document.write(`<tr> 
                     <td>4</td> 
                     <td>${contador4}</td> 
                     </tr>`
                    )
      document.write(`<tr> 
                     <td>5</td> 
                     <td>${contador5}</td> 
                     </tr>`
                    )
      document.write(`<tr> 
                     <td>6</td> 
                     <td>${contador6}</td> 
                     </tr>`
                    )
      document.write(`<tr> 
                     <td>7</td> 
                     <td>${contador7}</td> 
                     </tr>`
                    )
      document.write(`<tr> 
                     <td>8</td> 
                     <td>${contador8}</td> 
                     </tr>`
                    )
      document.write(`<tr> 
                     <td>9</td> 
                     <td>${contador9}</td> 
                     </tr>`
                    )
      document.write(`<tr> 
                     <td>10</td> 
                     <td>${contador10}</td> 
                     </tr>`
                    )
      document.write(`<tr> 
                     <td>11</td> 
                     <td>${contador11}</td> 
                     </tr>`
                    )
      document.write(`<tr> 
                     <td>12</td> 
                     <td>${contador12}</td> 
                     </tr>`
                    )
      

      document.write(`</tbody>
      </table>`)




      // document.write("el numero 2 aparecio en: "+contador+" oportunidades"+"<br>")
      // document.write("el numero 3 aparecio en: "+contador3+" oportunidades"+"<br>")
      // document.write("el numero 4 aparecio en: "+contador4+" oportunidades"+"<br>")
      
        
        
        

        // let numeros ="2"
// let contador = 0;

        // if(numero2.indexOf(sumas[i])!= -1){
        //   let contador2 = 0
        //   contador2++
        //   document.write("el numero dos aparece: " + contador2 +"veces"+"<br>")
        // }
        

// let numero = [1,2,5,1,2,1,2,1];
//  for(let i = 0 ; i< numero.length;i++){

//   if(numeros.indexOf(numero[i])!= -1){
//     contador++
//   }
  
//  }