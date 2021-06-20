import { Email, SMS, Android } from './classe/meiosDeNotificaçoes'


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