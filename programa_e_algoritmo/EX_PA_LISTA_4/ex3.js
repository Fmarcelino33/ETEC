
const input = require("readline-sync");

let n1 = input.questionInt("Digite n1: ");

if (n1 > 10 ) {
    console.log(n1, "maior que 10");
}else {
    console.log(n1, "menor ou igual a 10");
}
