//SISTEMAS DE NOTOAS
// Entrada de dados
var nome = prompt("Digite o nome do aluno:");
var nota1 = Number(prompt("Digite a primeira nota:"));
var nota2 = Number(prompt("Digite a segunda nota:"));
var nota3 = Number(prompt("Digite a terceira nota:"));

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