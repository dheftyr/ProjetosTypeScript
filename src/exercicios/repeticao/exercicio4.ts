// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.

let listNumber: Array<number> = [];

let quantP: number = 0;
let quantI: number = 0;

while(true){
    let number: number = Number(prompt("Digite um número: "));

    listNumber.push(number);

    let op: string = prompt("Sair: \nS - Sim \nN (Não)")?.toLowerCase() ?? "";

    if(op === 's'){
        alert("Saindo!");

        break;
    }
}

for(let i = 0; i < listNumber.length; i++){

    if(listNumber[i]! % 2 == 0){
        quantP++;
    }else{
        quantI++;
    }
}

