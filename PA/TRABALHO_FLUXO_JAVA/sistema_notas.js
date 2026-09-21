//SISTEMAS DE NOTOAS

const input = require('readline-sync');
// Entrada de dados
let nome = input.question("Digite o nome do aluno:");
let nota1 = input.questionInt("Digite a primeira nota:");
let nota2 = input.questionInt("Digite a segunda nota:");
let nota3 = input.questionInt("Digite a terceira nota:")

// Processamento
var media = (nota1 + nota2 + nota3) / 3;
var situacao = "";

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

// Saida no console
console.log("BOLETIM RESUMIDO");
console.log("Aluno: " + nome);
console.log("Notas: " + nota1 + ", " + nota2 + ", " + nota3);
console.log("Média: " + media);
console.log("Situação: " + situacao);
