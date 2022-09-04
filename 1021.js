console.log("Billetes y Monedas - 1021")
const prompt = require('prompt-sync')({sign: true});

let entrada = prompt(parseInt());
let a,b,c,d,e,f,g,h,i,j,k,n = 0;



   n = entrada * 100;
   a = n / 10000;
   n = n % 10000;
   b = n / 5000;
   n = n % 5000;
   c = n / 2000;
   n = n % 2000;
   d = n / 1000;
   n = n % 1000;
   e = n / 500;
   n = n % 500;
   f = n / 200;
   n = n % 200;
   g = n / 100;
   n = n % 100;
   h = n / 50;
   n = n % 50;
   i = n / 25;
   n = n % 25;
   j = n / 10;
   n = n % 10;
   k = n /5;
   n = n % 5;
   console.log("NOTAS:")
   console.log(parseInt(a), " nota(s) de R$ 100.00 ");
   console.log(parseInt(b), " nota(s) de R$ 50.00 ");
   console.log(parseInt(c), " nota(s) de R$ 20.00 ");
   console.log(parseInt(d), " nota(s) de R$ 10.00 ");
   console.log(parseInt(e), " nota(s) de R$ 5.00 ");
   console.log(parseInt(f), " nota(s) de R$ 2.00 ");
   console.log("MONEDAS");
   console.log(parseInt(g), " moneda(s) de R$ 1.00 ");
   console.log(parseInt(h), " moneda(s) de R$ 0.50 ");
   console.log(parseInt(i), " moneda(s) de R$ 0.25 ");
   console.log(parseInt(j), " moneda(s) de R$ 0.10 ");
   console.log(parseInt(k), " moneda(s) de R$ 0.05 ");
   console.log(parseInt(n), " moneda(s) de R$ 0.01 ");