//EX.3
const input = require("readline-sync");

let n1 = input.questionInt("Digite um numero: ");
let n2 = input.questionInt("Digite um numero: ");

let r3 = (n1 + n2);

if (r3 < 20 ) {
    n1= (n1 * 10)
    n2= (n2 * 10)
    console.log("n1 é menor que 20 ", n1);
    console.log("n2 é menor que 20 ", n2);    
}




