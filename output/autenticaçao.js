"use strict";
///<reference path ="./autenticaçao/index.ts "/>
const novoRegistro = new autenticaçao.LoginRegistro();
const resultadoRegistro = novoRegistro.registro({
    nome: "djalma",
    email: "djalma@hcode.com.br",
    senha: "djalmaroot",
    dataNascimento: new Date("1995-02-20"),
});
console.log(resultado);
