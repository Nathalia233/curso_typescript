"use strict";
class Notificaçoesv2 {
}
class Emailv2 extends Notificaçoesv2 {
    constructor(usuario) {
        super(),
            this.nome = usuario.nome;
        this.email = usuario.email;
        this.usuario = usuario;
    }
    enviar(usuario) {
        console.log(`enviando email para o usuario${this.email}...`);
        return true;
    }
}
class SMSv2 extends Notificaçoesv2 {
    constructor(usuario) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
        this.numero = usuario.telefone;
    }
    ;
    enviar(usuario) {
        console.log(`enviando SMS para o usuario ${this.numero}...`);
        return true;
    }
}
class Androidv2 extends Notificaçoesv2 {
    enviar(usuario) {
        console.log(`enviando mensagem para o usuario do android ${usuario.idAndroid}...`);
        return true;
    }
}
new Emailv2({
    nome: "joao",
    email: "joao@hcode.com.br",
    telefone: 119212345678
});
new SMSv2({
    nome: "joao",
    email: "joao@hcode.com.br",
    telefone: 119212345678
});
