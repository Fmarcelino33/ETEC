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

<--exe5-->
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

<--exe6-->
  const input = require("readline-sync");

let n1 = input.questionInt("Digite n1: ");
let n2 = input.questionInt("Digite n2: ");

if (n1 < n2) {
  console.log(n1, n2);
} else {
  console.log(n2, n1);
}

<--exe7-->
  const input = require("readline-sync");

let n1 = input.questionInt("Digite n1: ");
let n2 = input.questionInt("Digite n2: ");
let n3 = input.questionInt("Digite n3: ");

if (n1 <= n2 && n1 <= n3) {
  if (n2 <= n3) console.log(n1, n2, n3);
  else console.log(n1, n3, n2);
} else if (n2 <= n1 && n2 <= n3) {
  if (n1 <= n3) console.log(n2, n1, n3);
  else console.log(n2, n3, n1);
} else {
  if (n1 <= n2) console.log(n3, n1, n2);
  else console.log(n3, n2, n1);
}

<--exe8-->
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
<--exe9-->
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

<--exe10-->
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
