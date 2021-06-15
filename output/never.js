"use strict";
function showError(message) {
    throw new Error(message);
}
//console.log(showError("algo deu errado"));
let n = 0;
function loopInfinito() {
    while (true) {
        console.log(n++);
    }
}
loopInfinito();
