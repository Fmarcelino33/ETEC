//EX.3
const input = require("readline-sync");

let n1 = input.questionInt("Digite um numero: ");
let n2 = input.questionInt("Digite um numero: ");
let n3 = input.questionInt("Digite um numero: ");

let r1 = (n1 + 5);
let r2 = (n2 + 5);
let r3 = (n3 + 5);


if (r1 > 10 ) {
    console.log(r1, "é maior que 10");
}
if (r2 > 10 ) {
    console.log(r2, "é maior que 10");
}
if (r3 > 10 ) {
    console.log(r3, "é maior que 10");
}

