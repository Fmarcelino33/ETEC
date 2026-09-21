EXE5
let num1 = 10;
let num2 = 25;
let num3 = 18;

let maior1, maior2;

// Descobre os dois maiores números
if (num1 >= num2 && num1 >= num3) {
  maior1 = num1;
  maior2 = num2 > num3 ? num2 : num3;
} else if (num2 >= num1 && num2 >= num3) {
  maior1 = num2;
  maior2 = num1 > num3 ? num1 : num3;
} else {
  maior1 = num3;
  maior2 = num1 > num2 ? num1 : num2;
}

// Identifica o menor e o maior entre os dois maiores
let inicio = maior1 < maior2 ? maior1 : maior2;
let fim = maior1 > maior2 ? maior1 : maior2;

console.log("Números entre os dois maiores:");
for (let i = inicio + 1; i < fim; i++) {
  console.log(i);
}

EXE6
let numero = 7;

if (numero < 10) {
  console.log("O número lido é: " + numero);
} else {
  console.log("O número digitado não é menor que 10.");
}

EXE7
let num1 = 15;
let num2 = 3;

if (num1 > 10 && num2 < 5) {
  console.log("Primeiro número (maior que 10): " + num1);
  console.log("Segundo número (menor que 5): " + num2);
} else {
  console.log("Os números não atendem às condições esperadas.");
}

EXE8
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

EXE9
let numero = 25;

if (numero > 20) {
  console.log("Números em ordem decrescente:");
  for (let i = numero - 1; i > 1; i--) {
    console.log(i);
  }
} else {
  console.log("O número deve ser maior que 20.");
}

EXE10
let numero = 8;

if (numero > 5 && numero < 10) {
  console.log("O número digitado é: " + numero);
} else {
  console.log("O número não está entre 5 e 10.");
}