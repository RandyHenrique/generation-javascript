import * as readline from "readline-sync";

let fila: string[] = [];
let opcao = 0;

while (opcao !== 0) {
    opcao = Number(readline.question("Digite uma opção: "));

    if (opcao === 1) {
        const nome = readline.question("Digite o nome: ");
        fila.push(nome);

        console.log("\nFila:\n");
        fila.forEach(c => console.log(c));
        console.log("\nCliente Adicionado!\n");
    }


    else if (opcao === 2) {
        console.log("\nLista de Clientes na Fila:\n");

        if (fila.length === 0) {
            console.log("A fila está vazia!\n");
        } else {
            fila.forEach(c => console.log(c));
            console.log();
        }
    }
    else if (opcao === 3) {
        if (fila.length === 0) {
            console.log("\nA Fila está vazia!\n");
        } else {
            fila.shift();

            console.log("\nFila:\n");
            fila.forEach(c => console.log(c));
            console.log("\nO Cliente foi Chamado!\n");
        }
    }

    
    else if (opcao === 0) {
        console.log("\nPrograma Finalizado!\n");
    }

    else {
        console.log("\nOpção inválida!\n");
    }
}
