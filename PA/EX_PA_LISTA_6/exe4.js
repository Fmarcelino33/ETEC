const input = require("readline-sync");

let tabuada = 1;
while (tabuada <= 10) {

  console.log(`######### TABUADA DO ${tabuada} ########`);
    
  let multiplicando = 1;
  while (multiplicando <= 10) {
    console.log(`${tabuada} x ${multiplicando} = ${tabuada * multiplicando}`)
    multiplicando = multiplicando + 1;
  }
    
  console.log(`#############################`); 
  
    tabuada = tabuada + 1;
}
