const input = require("readline-sync");
let opt = -1;
cont=0;
let frutas=[]
while (opt != 0) {
    console.log("==== LISTA DE FRUTAS ====");
  console.log(`
        ===Menu===
        1 - Cadastrar
        2 - Listar Itens
        0 - Sair
        `);
        opt = input.questionInt("Escolha uma opcao: ");
        
        if (opt === 1) {
            let fruta = input.question("Digite uma fruta: ");
            frutas[frutas.length] = fruta;
            console.log("Fruta cadastrada com sucesso");
        } else if (opt === 2) {
            while(cont < frutas.length){
                console.log(`${cont+1} - `, frutas[cont]);
                cont++;
                
        }
    } else if(opt===0){
        console.log("Sistema encerrado")
    }
    else{
        console.log("Valor invalido, digite uma das opcoes")
    }
    console.log("=================");
}



