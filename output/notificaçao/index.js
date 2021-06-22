"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const meiosDeNotifica_oes_1 = require("./classe/meiosDeNotifica\u00E7oes");
new meiosDeNotifica_oes_1.Email().enviar({
    nome: "joao",
    email: "joao@hcode.com.br",
    telefone: "119212345678"
});
new meiosDeNotifica_oes_1.SMS().enviar({
    nome: "joao",
    email: "joao@hcode.com.br",
    telefone: "119212345678"
});
new meiosDeNotifica_oes_1.Android().enviar({
    nome: "joao",
    email: "joao@hcode.com.br",
    telefone: "119212345678",
    idAndroid: "jhdsahdkhahsdkas"
});
//# sourceMappingURL=index.js.map