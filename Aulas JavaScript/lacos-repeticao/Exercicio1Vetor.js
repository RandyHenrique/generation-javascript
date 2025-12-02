const readline = require('readline-sync');

let vetor = [];
let soma = 0;


for (let i = 0; i < 10; i++) {
    let num = readline.questionInt(`Digite um número para a posição ${i}: `);
    vetor[i] = num;
}


console.log("\nElementos nos índices ímpares:");
for (let i = 1; i < 10; i += 2) {
    console.log(vetor[i]);
}


console.log("\nElementos pares:");
for (let i = 0; i < 10; i++) {
    if (vetor[i] % 2 === 0) {
        console.log(vetor[i]);
    }
}


for (let i = 0; i < 10; i++) {
    soma += vetor[i];
}

let media = soma / 10;
ia
console.log(`\nSoma: ${soma}`);
console.log(`Média: ${media.toFixed(2)}`);
