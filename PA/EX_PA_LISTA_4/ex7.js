// <--exe7-->
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