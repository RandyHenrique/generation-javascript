const readline = require('readline-sync');

let nota1 = parseFloat(readline.question("Manda a Nota 1: "));
let nota2 = parseFloat(readline.question("Agora manda a Nota 2: "));
let nota3 = parseFloat(readline.question("Nota 3, por favor: "));
let nota4 = parseFloat(readline.question("E pra fechar, a Nota 4: "));


let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("Sua média final ficou: " + media.toFixed(1));
