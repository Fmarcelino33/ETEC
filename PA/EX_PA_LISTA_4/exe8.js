// <--exe8-->
const input = require("readline-sync");

let numero = input.questionInt("Digite um numero: ");
let resultado;

if (numero > 10) {
  resultado = numero + 5;
} else {
  resultado = numero + 20;
}

if (resultado > 25) {
  console.log("Resultado maior que 25: ", resultado);
}