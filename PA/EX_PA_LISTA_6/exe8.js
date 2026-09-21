// EXE8
let numero = 2;

if (numero < 5) {
  console.log("Números pares entre " + numero + " e 20:");
  for (let i = numero + 1; i < 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
} else {
  console.log("O número deve ser menor que 5.");
}