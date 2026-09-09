const input = require("readline-sync");

let n1 = input.questionInt("Digite n1: ");
let n2 = input.questionInt("Digite n2: ");
let n3 = input.questionInt("Digite n3: ");

let maior = n1;

if (n2 > maior) {
  maior = n2;
}
if (n3 > maior) {
  maior = n3;
}

console.log("O maior numero e: ", maior);

