// 3. Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
// desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
// *
// **
// ***
export function exercicio3() {
    let triangle = ``;
    function desenhar_triangulo(num) {
        let contLine = 0;
        for (let i = 1; i <= num; i++) {
            contLine++;
            for (let i = 0; i < contLine; i++) {
                triangle += `*`;
            }
            triangle += `\n`;
        }
    }
    let number = Number(prompt("Digite um número: "));
    desenhar_triangulo(number);
    alert(triangle);
}
//# sourceMappingURL=exercicio3.js.map