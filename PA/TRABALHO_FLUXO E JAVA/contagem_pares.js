//CONTAGEM

const input = require('readline-sync');

var contador = 1;
var pares = 0;


while (contador <= 5) {
    var numero = input.questionInt("Digite o " + contador + "º número inteiro:");

    if (numero % 2 === 0) {
        pares = pares + 1;
    }

    contador = contador + 1;
}


console.log("Quantidade de números pares digitados: " + pares);
