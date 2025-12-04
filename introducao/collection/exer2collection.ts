
import * as readline from "readline-sync";


const valores = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

console.log("List");
for (const v of valores) {
  console.log(v);
}

const entrada = readline.question("\nDigite o número que você deseja encontrar: ").trim();
const n = Number(entrada);

if (!Number.isInteger(n)) {
  console.log("Digite um número inteiro válido.");
} else {
  if (valores.has(n)) {
    console.log(`\nO número ${n} foi encontrado!`);
  } else {
    console.log(`\nO número ${n} não foi encontrado!`);
  }
}
