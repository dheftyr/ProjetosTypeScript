// Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
// esse intervalo e imprimir apenas os números que são múltiplos de 3.
let numberFirst = Number(prompt("Digite o número inicial"));
let numberSecond = Number(prompt("Digite o número final"));
let result = `Números multiplos de 3:\n`;
function numero_multiplos(num1, num2) {
    for (let i = num1; i <= num2; i++) {
        if (i % 3 === 0) {
            result += `${i}\n`;
        }
    }
}
numero_multiplos(numberFirst, numberSecond);
alert(result);
export {};
//# sourceMappingURL=exercicio5.js.map