//CAIXA ELETRONICO
// Entrada de dados
var valor = Number(prompt("Digite o valor do saque:"));

// VERIFICA MULTIPLO DE 10
if (valor % 10 !== 0 || valor <= 0) {
    console.log("Saque não pode ser realizado. Digite um valor múltiplo de 10.");
} else {
    // Calculando a quantidade de notas
    var notas100 = Math.floor(valor / 100);
    valor = valor % 100;

    var notas50 = Math.floor(valor / 50);
    valor = valor % 50;

    var notas20 = Math.floor(valor / 20);
    valor = valor % 20;

    var notas10 = Math.floor(valor / 10);

    // SaIda no console
    console.log("NOTAS ENTREGUES:");
    if (notas100 > 0) {
        console.log("Notas de R$ 100: " + notas100);
    }
    if (notas50 > 0) {
        console.log("Notas de R$ 50: " + notas50);
    }
    if (notas20 > 0) {
        console.log("Notas de R$ 20: " + notas20);
    }
    if (notas10 > 0) {
        console.log("Notas de R$ 10: " + notas10);
    }
}