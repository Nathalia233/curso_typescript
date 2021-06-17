"use strict";
/*interface IEmail{
    name: string,
    email: string,
}

interface INotificaçoesv2 {
    eviar(usuario: MeuUsuariov2): boolean;
}

interface MeuUsuariov2 {
    nome: string;
    email: string;
    telefone: string;
    idAndroid?: string;
}

abstract class Notificaçoesv2{
    abstract enviar(usuario: MeuUsuariov2): boolean;
}

class Emailv2 extends Notificaçoesv2 implements  INotificaçoesv2, IEmail{

    private name: string;
    private email: string;

    constructor(usuario: MeuUsuariov2){
        super(),
        this.name = usuario.nome;
        this.email = usuario.email;
    }

    enviar(usuario: MeuUsuariov2): boolean {
        console.log(`enviando email para o usuario ${usuario.email}...`);
        return true;
    }
}
class SMSv2 extends Notificaçoesv2 {
    enviar(usuario: MeuUsuariov2): boolean {
        console.log(`enviando SMS para o usuario ${usuario.telefone}...`);
        return true;
    }
}
class Androidv2 extends Notificaçoesv2 {
    enviar(usuario: MeuUsuariov2): boolean {
        console.log(`enviando mensagem para o usuario do android ${usuario.idAndroid}...`);
        return true;
    }
}
new Emailv2().enviar({
    nome: "joao",
    email: "joao@hcode.com.br",
    telefone: "119212345678"
});
new SMSv2().enviar({
    nome: "joao",
    email: "joao@hcode.com.br",
    telefone: "119212345678"
});
new Androidv2().enviar({
    nome: "joao",
    email: "joao@hcode.com.br",
    telefone: "119212345678",
    idAndroid: "jhdsahdkhahsdkas"
});
/*/ 
