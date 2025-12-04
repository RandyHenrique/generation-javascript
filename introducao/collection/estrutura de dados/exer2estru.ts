import * as readlineSync from "readline-sync";

// Classe Stack (Pilha)
class Stack {
    private items: string[] = [];

    push(item: string) {
        this.items.push(item);
    }

    pop(): string | undefined {
        return this.items.pop();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    list(): string[] {
        return this.items;
    }
}

// Programa principal
const pilha = new Stack();
let opcao = -1;

while (opcao !== 0) {
    console.log("\nMenu:");
    console.log("1 - Adicionar livro");
    console.log("2 - Listar livros");
    console.log("3 - Retirar livro");
    console.log("0 - Sair");

    opcao = Number(readlineSync.question("Digite uma opção: "));

    switch (opcao) {

        case 1:
            const nome = readlineSync.question("Digite o nome do livro: ");
            pilha.push(nome);
            console.log("\nPilha:");
            pilha.list().forEach(livro => console.log(livro));
            console.log("\nLivro adicionado!");
            break;

        case 2:
            console.log("\nLista de Livros na Pilha:");
            pilha.list().forEach(livro => console.log(livro));
            break;

        case 3:
            if (pilha.isEmpty()) {
                console.log("\nA Pilha está vazia!");
            } else {
                const retirado = pilha.pop();
                console.log(`\nLivro removido: ${retirado}`);
            }
            break;

        case 0:
            console.log("\nSaindo do programa...");
            break;

        default:
            console.log("\nOpção inválida!");
            break;
    }
}
