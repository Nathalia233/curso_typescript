"use strict";
class Usuario {
    constructor() {
        this.id = "";
        this.nome = "";
        this.senha = "123456";
        this.dataCadastro = new Date("2021-01-01");
    }
}
const usuario = new Usuario();
// usuario.id = "123";
//console.log(usuario.senha);
console.log(usuario.id);
