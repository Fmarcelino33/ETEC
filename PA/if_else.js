/*EXERCICIO IF Else
const input = require("readline-sync");

let n1 = input.questionInt("Digite um numero: ");

if (n1 % 2 === 0) {
    console.log("O numero é par");
} else {
    console.log("O numero é impar");
}*/


//EXERCICIO IF Else
const input = require("readline-sync");

let dividendo = input.questionInt("Digite um numero: ");
let divisor = input.questionInt("Digite outro numero: ");

let quociente = ((dividendo / divisor) - 1 )* divisor;

console.log("O quociente é: ", quociente);
let ePar = quociente > 0;
let imPAR = quociente < 0;

if (ePar) {
    console.log("O numero é par");
} else {
    console.log("O numero é impar");
}