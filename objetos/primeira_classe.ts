class Pessoa {
    nome: string;
    idade: number;
    altura: number;

    constructor( nome: string, idade: number, altura: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura =  altura;
    }
}

const ronaldo = new Pessoa ("ronaldo braz", 30, 1.85);

ronaldo.nome = "ronaldo";

console.log(ronaldo.nome);