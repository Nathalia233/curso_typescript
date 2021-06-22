"use strict";
class Pedido {
    constructor(produto, valorTotal, previsaoEntrega) {
        this.produto = produto;
        this.valorTotal = valorTotal;
        this.previsaoEntrega = previsaoEntrega;
    }
}
const meuPedido = new Pedido("tv 64 poelgadas", 2000, new Date("2021-05-01"));
console.log(meuPedido);
//# sourceMappingURL=classe_construtor.js.map