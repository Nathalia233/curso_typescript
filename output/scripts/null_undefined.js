"use strict";
const meuElemento = document.
    querySelector("h2");
let db = "mysql, 127.0.0.1, password";
db = null;
let minhaVariavel;
if (new Date().getDate() === 15) {
    minhaVariavel = "hoje é dia 15";
}
console.log(minhaVariavel);