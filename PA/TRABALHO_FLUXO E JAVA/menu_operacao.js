//MENU OPERACAO

const input = require('readline-sync');
// Exibe o menu e opcao escolhida
var opcao = input.questionInt("MENU DE OPCOES:\n1: Aplicar 10% de desconto em um preco\n2: Calcular o dobro de um numero\n\nEscolha uma opcao (1 ou 2):");

if (opcao === 1) {
    var preco = input.questionInt("Digite o preco:");
    var resultado = preco - (preco * 0.10);
    console.log("Preco com 10% de desconto: R$ " + resultado);
} else if (opcao === 2) {
    var numero = input.questionInt("Digite o numero:");
    var resultado = numero * 2;
    console.log("O dobro do numero e: " + resultado);
} else {
    console.log("Opcao invalida!");
}
