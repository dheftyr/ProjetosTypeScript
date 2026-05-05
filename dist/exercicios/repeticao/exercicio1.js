// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total
export function exercicio1() {
    let cont = 0;
    let sum = 0;
    while (true) {
        let number = Number(prompt("Digite um número ou 0 para sair: "));
        cont++;
        sum += number;
        if (number == 0) {
            alert(`Quantidade de números digitados: ${cont} \nSoma total: ${sum}`);
            break;
        }
    }
}
//# sourceMappingURL=exercicio1.js.map