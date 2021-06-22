"use strict";
const string = {
    valor: "hcode",
    realizarProcessamento(argumento) {
        return argumento.toUpperCase();
    }
};
console.log(string.valor);
console.log(string.realizarProcessamento("hcode treinamentos"));
const numero = {
    valor: 10,
    realizarProcessamento(v) {
        return v * v;
    }
};
console.log(numero.realizarProcessamento(numero.valor));
//# sourceMappingURL=interfaces_genericas.js.map