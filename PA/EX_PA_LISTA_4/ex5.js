// <--exe5-->
const input = require("readline-sync");

let n1 = input.questionInt("Digite n1: ");
let n2 = input.questionInt("Digite n2: ");
let n3 = input.questionInt("Digite n3: ");

let menor = n1;

if (n2 < menor) {
  menor = n2;
}
if (n3 < menor) {
  menor = n3;
}

let resultado = menor + 5;
console.log("Resultado: ", resultado);