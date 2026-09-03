
const input = require("readline-sync");

let n1 = input.questionInt("Digite n1: ");
let n2 = input.questionInt("Digite n2: ");
let n3 = input.questionInt("Digite n3: ");

let maiorvalor = (n1 > n2 == n3)

if (n1 > n2) {
    if (n1 > n3) {
        console.log(n1, "maior valor");
    } else {
        console.log(n2, "maior valor");
    }
    if (n3 < n2) {
        if (n3 < n2) {
            console.log(n2, "menor valor");
        } else {
            console.log(n3, "menor valor");
    }
}    
}
