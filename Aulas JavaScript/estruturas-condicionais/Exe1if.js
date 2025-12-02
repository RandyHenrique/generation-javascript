const rs = require("readline-sync");

const A = parseInt(rs.question("A: "));
const B = parseInt(rs.question("B: "));
const C = parseInt(rs.question("C: "));

const soma = A + B;

if (soma > C) {
    console.log(`${A} + ${B} = ${soma} > ${C}`);
    console.log("A soma é maior que C.");
} else if (soma < C) {
    console.log(`${A} + ${B} = ${soma} < ${C}`);
    console.log("A soma é menor que C.");
} else {
    console.log(`${A} + ${B} = ${soma} = ${C}`);
    console.log("A soma é igual a C.");
}
