"use strict";
class Cadastro {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
const joaoo = new Cliente("joao", new Date("2000-01-01"), "joaoo@hcode.com", "gyzu");
//# sourceMappingURL=classe_heran%C3%A7a.js.map