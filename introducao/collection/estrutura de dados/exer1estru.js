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
const readline = __importStar(require("readline-sync"));
let fila = [];
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
        }
        else {
            fila.forEach(c => console.log(c));
            console.log();
        }
    }
    else if (opcao === 3) {
        if (fila.length === 0) {
            console.log("\nA Fila está vazia!\n");
        }
        else {
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
