
const input = require("readline-sync");

let n1 = input.questionInt("Digite n1: ");
let n2 = input.questionInt("Digite n2: ");

if (n1 < n2 ) {
    console.log("O menor é", n1);
}else {
    console.log("O menor é ", n2);
}
