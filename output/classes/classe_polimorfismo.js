"use strict";
class Empresa {
    prestarServico() {
        return "empresa pestando serviço";
    }
}
class Padaria extends Empresa {
    prestarServico() {
        return "vendendo pao";
    }
}
class Mercearia extends Empresa {
    prestarServico() {
        return "vendendo alimentos e bebidas";
    }
}
console.log(new Empresa().prestarServico());
console.log(new Padaria().prestarServico());
console.log(new Mercearia().prestarServico());
//# sourceMappingURL=classe_polimorfismo.js.map