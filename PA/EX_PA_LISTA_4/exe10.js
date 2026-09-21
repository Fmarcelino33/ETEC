// <--exe10-->
const input = require("readline-sync");

let n1 = input.questionInt("Digite n1: ");
let n2 = input.questionInt("Digite n2: ");

let menor, maior;

if (n1 < n2) {
  menor = n1;
  maior = n2;
} else {
  menor = n2;
  maior = n1;
}

let contaMenor = menor * 10;
let contaMaior = maior / 2;
let total = contaMenor + contaMaior;

if (total % 2 === 0) {
  console.log("O resultado e par: ", total);
} else {
  console.log("O resultado e impar: ", total);
}