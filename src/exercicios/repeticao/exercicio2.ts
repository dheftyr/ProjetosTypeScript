let number: number = Number(prompt("Digite um número:"));

let sum: string = "";
let sub: string = "";
let div: string = "";
let mult: string = "";


let result: string = "";

for(let i = 1; i <= 10; i++){
    sum += `${i} + ${number} = ${number + i}\n`; 
}

for(let i = 1; i <= 10; i++){
    sub += `${i} - ${number} = ${number - i}\n`;
}

for(let i = 1; i <= 10; i++){
    div += `${i} / ${number} = ${number / i}\n`;
}

for(let i = 1; i <= 10; i++){
    mult += `${i} * ${number} = ${number * i}\n`;
}

result = `Soma: \n${sum} \n\nSubtração: \n${sub} \n\nDivisão: \n${div} \n\nMultiplicação: \n${mult}`;

console.log(result);