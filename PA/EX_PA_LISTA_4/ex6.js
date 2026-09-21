// <--exe6-->
const input = require("readline-sync");

let n1 = input.questionInt("Digite n1: ");
let n2 = input.questionInt("Digite n2: ");

if (n1 < n2) {
  console.log(n1, n2);
} else {
  console.log(n2, n1);
}