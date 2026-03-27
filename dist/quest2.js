"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = Number(prompt("Digite um número:"));
let numJs = num;
function verifyPairOrOdd(num) {
    if (num % 2 === 0) {
        return "Par";
    }
    else {
        return "Ímpar";
    }
}
alert(verifyPairOrOdd(numJs));
//# sourceMappingURL=quest2.js.map