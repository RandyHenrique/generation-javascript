const rs = require("readline-sync");

let nome = rs.question("Nome do colaborador: ");
let codigo = parseInt(rs.question("Cargo (1 a 6): "));
let salario = parseFloat(rs.question("Salário: R$ "));

let cargo;
let reajuste;

switch (codigo) {
    case 1:
        cargo = "Gerente";
        reajuste = 0.10;
        break;

    case 2:
        cargo = "Vendedor";
        reajuste = 0.07;
        break;

    case 3:
        cargo = "Supervisor";
        reajuste = 0.09;
        break;

    case 4:
        cargo = "Motorista";
        reajuste = 0.06;
        break;

    case 5:
        cargo = "Estoquista";
        reajuste = 0.05;
        break;

    case 6:
        cargo = "Técnico de TI";
        reajuste = 0.08;
        break;

    default:
        console.log("Código de cargo inválido!");
        return;
}

let novoSalario = salario + (salario * reajuste);

console.log(`\nNome do colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
