"use strict";
class Veiculo {
    constructor(cor) {
        this.cor = cor;
    }
    tentandoAbrirPorta() {
        return false;
    }
}
const carro = new Veiculo("branco");
carro.cor = "preto";
console.log(carro.cor);
//# sourceMappingURL=classe_public.js.map