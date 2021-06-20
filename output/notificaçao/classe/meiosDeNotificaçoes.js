"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Android = exports.SMS = exports.Email = void 0;
const Notifica_oes_1 = __importDefault(require("./Notifica\u00E7oes"));
class Email extends Notifica_oes_1.default {
    enviar(usuario) {
        console.log(`enviando email para o usuario ${usuario.email}...`);
        return true;
    }
}
exports.Email = Email;
class SMS extends Notifica_oes_1.default {
    enviar(usuario) {
        console.log(`enviando SMS para o usuario ${usuario.telefone}...`);
        return true;
    }
}
exports.SMS = SMS;
class Android extends Notifica_oes_1.default {
    enviar(usuario) {
        console.log(`enviando mensagem para o usuario do android ${usuario.idAndroid}...`);
        return true;
    }
}
exports.Android = Android;
