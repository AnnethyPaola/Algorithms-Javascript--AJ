
let precio = 0.00;
let resultado = 0.00;

const prompt = require('prompt-sync')({sign: true});

let codigo = parseFloat(prompt());
let cantidad = parseFloat(prompt());

if(codigo == 1){
    precio = 4.00;
    resultado = cantidad * precio;
    console.log("R$ " + parseFloat(resultado));
   
} else if (codigo == 2){
    precio = 4.50;
    resultado = cantidad * precio;
    console.log("R$ " + parseFloat(resultado));
}
else if (codigo == 3){
    precio = 5.00;
    resultado = cantidad * precio;
    console.log("R$ " +  parseFloat(resultado));
}
else if (codigo == 4){
    precio = 2.00; 
    resultado = cantidad * precio;
    console.log("R$ " + resultado);
}
else if(codigo == 5) {
    precio = 1.50;
    resultado = cantidad * precio;
    console.log("R$ " +  parseFloat(resultado));
}else{
    console.log("Codigo Introducido no valido");
}