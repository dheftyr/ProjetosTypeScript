// 1. Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).
export function exercicio1() {
    let somaString = "";
    function somaAte(num) {
        let soma = 0;
        for (let i = 1; i <= num; i++) {
            soma += i;
            somaString += `${i}+`;
        }
        return soma;
    }
    let number = Number(prompt("Digite um número: "));
    let result = somaAte(number);
    alert(`${somaString.slice(0, -1)} = ${result}`);
}
//# sourceMappingURL=exercicio1.js.map