"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apllyMixins_1 = __importDefault(require("./apllyMixins"));
class ProdutoFinal {
    vender(quantidade) {
        return `foram vendidos ${quantidade} itens deste produto`;
    }
    comprar(quantidade) {
        return `foram comprados ${quantidade} itens deste produto`;
    }
}
class Movel {
    sentar() {
        return "vc sentou";
    }
    empurrar(metros) {
        return `o movel foi empurrado ${metros} metros`;
    }
}
class Sofa {
    constructor(nome) {
        this.nome = nome;
    }
    vender(quantidade) {
        return "vc vendeu o sofa";
    }
}
apllyMixins_1.default(Sofa, [ProdutoFinal, Movel]);
const Produto = new Sofa("meu sofa");
console.log(Produto.vender(25));
console.log(Produto.empurrar(50));
console.log(Produto.nome);
//# sourceMappingURL=index.js.map