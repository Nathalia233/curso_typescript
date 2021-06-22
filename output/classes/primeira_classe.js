"use strict";
class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    toString() {
        return `a pessoa ${this.nome} tem ${this.idade} anos e mede ${this.altura} de altura `;
    }
    ;
}
const ronaldo = new Pessoa("ronaldo braz", 30, 1.85);
const marcus = new Pessoa("marcus ribeiro", 19, 2);
ronaldo.nome = "ronaldo";
console.log("pessoa: " + ronaldo);
console.log("pessoa: " + marcus);
//# sourceMappingURL=primeira_classe.js.map