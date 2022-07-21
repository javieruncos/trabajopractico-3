let sumas = [];
  let contador = 0;
  let numero2 = "2";


for(let i = 0; i < 50 ; i++){
  let dado1 = Math.floor(Math.random()*(6 - 1 + 1)+1);
  let dado2 = Math.floor(Math.random()*(6 - 1 + 1)+1);
  let resultado = dado1 + dado2;
  sumas.push(resultado);
  

    if(numero2.indexOf(sumas[i])!= -1){
      contador++
    }
    
      console.log(contador)


  // for(let i=0; i<sumas.length;i++){
    
  
  //   if(numero2.indexOf(sumas[i])!= -1){
  //     contador++
  
  //   }
  // }

  
  // console.log(contador)
  
}
  




document.write("resultado sumas: "+ sumas)


// let numeros ="2"
// let contador = 0;


// let numero = [1,2,5,1,2,1,2,1];
//  for(let i = 0 ; i< numero.length;i++){

//   if(numeros.indexOf(numero[i])!= -1){
//     contador++
//   }
  
//  }