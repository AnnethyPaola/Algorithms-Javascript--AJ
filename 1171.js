
const prompt = require('prompt-sync')({sign: true});

let limite = prompt();
const numeros = [].sort(function(a, b){return a - b});



for(let i = 0; i < limite; i++) {
    entrada = prompt();
    numeros.push(entrada);
}

let unicosElementos = [];
let vecesRepetidas = [];
let contador = 1;


for(let k = 0; k < numeros.length; k++) {
    if(numeros[k+1] === numeros[k]){
        contador++;
    }else{
        unicosElementos.push(numeros[k]);
        vecesRepetidas.push(contador);
        contador =1;
    }
   }

console.log("///////////////////////////////")

for(let j = 0; j < unicosElementos.length; j++ ){
    console.log(unicosElementos[j] + " aparece " + vecesRepetidas[j] + " vez(es) ");
   }



