"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
// Classe Stack (Pilha)
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    list() {
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
            }
    }
}
