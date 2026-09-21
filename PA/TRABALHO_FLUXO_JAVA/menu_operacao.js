//MENU OPERACAO
// Exibe o menu e opcao escolhida
var opcao = Number(prompt("MENU DE OPÇÕES:\n1: Aplicar 10% de desconto em um preço\n2: Calcular o dobro de um número\n\nEscolha uma opção (1 ou 2):"));

if (opcao === 1) {
    var preco = Number(prompt("Digite o preço:"));
    var resultado = preco - (preco * 0.10);
    console.log("Preço com 10% de desconto: R$ " + resultado);
} else if (opcao === 2) {
    var numero = Number(prompt("Digite o número:"));
    var resultado = numero * 2;
    console.log("O dobro do número é: " + resultado);
} else {
    console.log("Opção inválida!");
}