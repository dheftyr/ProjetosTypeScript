let number = Number(prompt("Digite um número:"));
let sum = "";
let sub = "";
let div = "";
let mult = "";
let result = "";
for (let i = 1; i <= 10; i++) {
    sum += `${i} + ${number} = ${number + i}\n`;
}
for (let i = 1; i <= 10; i++) {
    sub += `${i} - ${number} = ${number - i}\n`;
}
for (let i = 1; i <= 10; i++) {
    div += `${i} / ${number} = ${number / i}\n`;
}
for (let i = 1; i <= 10; i++) {
    mult += `${i} * ${number} = ${number * i}\n`;
}
result = `Soma: \n${sum} \n\nSubtração: \n${sub} \n\nDivisão: \n${div} \n\nMultiplicação: \n${mult}`;
console.log(result);
export {};
//# sourceMappingURL=exercicio2.js.map