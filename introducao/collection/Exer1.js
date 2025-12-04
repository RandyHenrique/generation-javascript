const readline = require('readline-sync');
let cores = [];
console.log("Digite 5 cores:");
for (let i = 0; i < 5; i++) {
    let cor = readline.question(`Cor ${i + 1}: `);
    cores.push(cor);
}
console.log("\nListar todas as cores:");
cores.forEach(c => console.log(c));
console.log("\nOrdenar as cores:");
let ordenadas = [...cores].sort();
ordenadas.forEach(c => console.log(c));
