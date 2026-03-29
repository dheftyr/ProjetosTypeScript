// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total


let cont: number = 0;
let sum: number = 0;

while (true) {
    let number: number = Number(prompt("Digite um número ou 0 para sair: "));

    cont++;

    sum += number;

    if(number == 0){
        alert(`Quantidade de números digitados: ${cont} \nSoma total: ${sum}`);
        break;
    }
}