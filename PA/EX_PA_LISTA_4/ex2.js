
const input = require("readline-sync");

let n1 = input.questionInt("Digite n1: ");
let n2 = input.questionInt("Digite n2: ");

if (n1 < n2 ) {
    console.log(n1 += 5);
}else {
    console.log(n2 += 5);
}

if (n1 > n2 ) {
    console.log(n1, "é maior");
}else {
    console.log(n2, "é maior");
}