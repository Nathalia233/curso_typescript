"use strict";
class Banco {
    constructor() {
        this.cofreQtd = 10000;
    }
    debitarCofre(quantidade) {
        if (this.cofreQtd >= quantidade) {
            this.cofreQtd -= quantidade;
            return this.cofreQtd;
        }
        else {
            return "o cofre nao possui a quantidade";
        }
    }
    sacaraDoCaixa(quantidade) {
        return this.debitarCofre(quantidade);
    }
}
class Banco24Horas extends Banco {
    static sacaraDoCaixa(arg0) {
        throw new Error("Method not implemented.");
    }
    sacar(qtd) {
        return this.sacaraDoCaixa(qtd);
    }
}
const banco24 = new Banco24Horas();
Banco24Horas.sacaraDoCaixa(25000);
//# sourceMappingURL=classe_provate.js.map