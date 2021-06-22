"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.debug = void 0;
function debug(classe) {
    console.log("classe criada", classe);
}
exports.debug = debug;
function log(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.created_at = new Date("2021-02-2015");
        }
    };
}
exports.log = log;
