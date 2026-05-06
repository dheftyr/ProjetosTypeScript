// Sistema de Eficiência de Combustível
// Crie um programa que ajude um motorista a saber a autonomia do seu carro.
//  Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando
// o consumo médio (km/l).
//  Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos
// quilômetros o carro percorre com o tanque cheio.
export function exercicio7() {
    let distancia = Number(prompt("Digite a distancia pecorrida:"));
    let combustivel = Number(prompt("Digite a quantidade de combustível gasto:"));
    let tanqueC = Number(prompt("Capacidade total em litro do tanque"));
    function consumoMedio(disPercorrida, combuGasto) {
        let consumoM = 0;
        consumoM = disPercorrida / combuGasto;
        return consumoM;
    }
    let result = consumoMedio(distancia, combustivel);
    function distanciaPer(conumoM, taquenC) {
        let distPer = 0;
        distPer = taquenC * conumoM;
        return distPer;
    }
    alert(distanciaPer(result, tanqueC));
}
//# sourceMappingURL=exercicio7.js.map