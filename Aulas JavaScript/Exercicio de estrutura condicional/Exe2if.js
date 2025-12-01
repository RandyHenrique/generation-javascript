const rs = require("readline-sync");

const n = parseInt(rs.question("Digite um número: "));

let parOuImpar;
let positivoOuNegativo;


if (n % 2 === 0) {
    parOuImpar = "par";
} else {
    parOuImpar = "ímpar";
}


if (n >= 0) {
    positivoOuNegativo = "positivo";
} else {
    positivoOuNegativo = "negativo";
}

console.log(`O Número ${n} é ${parOuImpar} e ${positivoOuNegativo}!`);
