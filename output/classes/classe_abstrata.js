"use strict";
class Notificaçoes {
}
class Email extends Notificaçoes {
    enviar(usuario) {
        console.log(`enviando email para o usuario ${usuario.email}...`);
        return true;
    }
}
class SMS extends Notificaçoes {
    enviar(usuario) {
        console.log(`enviando SMS para o usuario ${usuario.telefone}...`);
        return true;
    }
}
class Android extends Notificaçoes {
    enviar(usuario) {
        console.log(`enviando mensagem para o usuario do android ${usuario.idAndroid}...`);
        return true;
    }
}
new Email().enviar({
    nome: "joao",
    email: "joao@hcode.com.br",
    telefone: "119212345678"
});
new SMS().enviar({
    nome: "joao",
    email: "joao@hcode.com.br",
    telefone: "119212345678"
});
new Android().enviar({
    nome: "joao",
    email: "joao@hcode.com.br",
    telefone: "119212345678",
    idAndroid: "jhdsahdkhahsdkas"
});
//# sourceMappingURL=classe_abstrata.js.map