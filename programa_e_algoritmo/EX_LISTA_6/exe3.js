const input = require("readline-sync");

/*let numero = 5;

while (numero <= 10) {
  console.log(numero);
  numero++; 
}*/

let n1 = input.questionInt("Digite um numero-1: ");
let n2 = input.questionInt("Digite um numero-2: ");

let valores = (n1 > n2);

if (n1 > n2) {

  while (n2 < n1) {
    console.log(n2)
    n2++
  }
  console.log("n1 ", n1)

} else {
  while (n1 < n2) {
    console.log(n1)
    n1++
  }
  console.log("n2 ", n2)

}

