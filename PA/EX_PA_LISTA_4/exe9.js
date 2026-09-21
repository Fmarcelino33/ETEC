// <--exe9-->
const input = require("readline-sync");

let n1 = input.questionInt("Digite n1: ");
let n2 = input.questionInt("Digite n2: ");
let n3 = input.questionInt("Digite n3: ");
let n4 = input.questionInt("Digite n4: ");

let somaPrimeiros = n1 + n2;
let subultimos = n3 - n4;
let total = somaPrimeiros + subultimos;

if (total > 10) {
  console.log("resultado maior que dez");
} else {
  console.log("resultado menor ou igual a dez");
}