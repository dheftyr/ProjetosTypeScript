// Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.
let listNumber = [];
let quantP = 0;
let quantI = 0;
while (true) {
    let number = Number(prompt("Digite um número:"));
    listNumber.push(number);
    let op = Number(prompt("Deseja sair: \n-1 Sair \n-2 Continuar"));
    if (op == -1) {
        alert("Saindo do programa!");
        break;
    }
}
for (let i = 0; i < listNumber.length; i++) {
    if (listNumber[i] % 2 == 0) {
        quantP++;
    }
    else {
        quantI++;
    }
}
alert(`Quantidade de Número pares: ${quantP} \nQuantidade de Número ímpar: ${quantI}`);
export {};
//# sourceMappingURL=exercicio4.js.map