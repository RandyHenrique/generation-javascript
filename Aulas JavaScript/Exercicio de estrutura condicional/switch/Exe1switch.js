const rs = require("readline-sync");

let codigo = parseInt(rs.question("Código do Produto: "));
let qtd = parseInt(rs.question("Quantidade: "));

let produto;
let preco;

switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        preco = 10.00;
        break;

    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;

    case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;

    case 4:
        produto = "Bauru";
        preco = 12.00;
        break;

    case 5:
        produto = "Refrigerante";
        preco = 8.00;
        break;

    case 6:
        produto = "Suco de laranja";
        preco = 13.00;
        break;

    default:
        console.log("Código inválido!");
        return;
}

let total = qtd * preco;

console.log(`\nProduto: ${produto}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);
