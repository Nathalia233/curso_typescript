"use strict";
class Domicilio {
    constructor(cor, endereço) {
        this.cor = cor;
        this.endereço = endereço;
    }
    entrarNaCasa() {
        return "oi, quem é?";
    }
}
class Casa extends Domicilio {
    entrarNaCasa() {
        return this.atenderInterfone("oi, quem é?");
    }
    atenderInterfone(mensagem) {
        return mensagem;
    }
}
const casadoHomer = new Casa("rosa", { cidade: "springfield" });
console.log(casadoHomer.entrarNaCasa());
//# sourceMappingURL=classe_protected.js.map