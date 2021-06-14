class Pessoa {
    nome: string;
    idade: number;
    altura: number;

    constructor( nome: string, idade: number, altura: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura =  altura;
    }
    

    toString(): string {

return `a pessoa ${this.nome} tem ${this.idade} anos e mede ${this.altura} de altura `
};
}
const ronaldo = new Pessoa ("ronaldo braz", 30, 1.85);
const marcus = new Pessoa ("marcus ribeiro", 19, 2);


ronaldo.nome = "ronaldo";

console.log("pessoa: " + ronaldo);
console.log("pessoa: "+ marcus);
