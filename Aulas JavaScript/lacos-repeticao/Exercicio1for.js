const readline = require('readline-sync');

let inicio = readline.questionInt("Digite o primeiro número do intervalo: ");
let fim    = readline.questionInt("Digite o último número do intervalo: ");

if (inicio >= fim) {
  console.log("Intervalo inválido!");
  process.exit();
}

console.log(`\nNo Intervalo entre ${inicio} e ${fim}:\n`);

for (let i = inicio; i <= fim; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} é múltiplo de 3 e 5`);
  }
}
