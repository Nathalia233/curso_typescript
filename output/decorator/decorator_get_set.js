"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratorGetSet(valor) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = false;
    };
}
class login {
    constructor(_usuario, _senha) {
        this._usuario = _usuario;
        this._senha = _senha;
    }
    get usuario() {
        return this._usuario;
    }
    get senha() {
        return this._senha;
    }
}
__decorate([
    decoratorGetSet(true)
], login.prototype, "usuario", null);
__decorate([
    decoratorGetSet(false)
], login.prototype, "senha", null);
const Login = new login("antony@hacode.com.br", "102030");
for (let chave in login) {
    console.log("chave", chave);
    console.log("valor", login[chave]);
}
//# sourceMappingURL=decorator_get_set.js.map