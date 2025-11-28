const readline = require('readline-sync');


let salario = parseFloat(readline.question("Digite o salario: "));
let abono = parseFloat(readline.question("Digite o abono: "));


let novoSalario = salario + abono;


console.log("Novo salário: " + novoSalario.toFixed(2));


