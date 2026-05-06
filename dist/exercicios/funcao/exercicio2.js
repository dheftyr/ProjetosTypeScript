// 2. O IF tem uma estufa e o professor de biologia quer um sistema simples para monitorar a
// temperatura.
// ● Crie uma função ler_temperatura():
// o Simula a leitura de um sensor, pedindo ao usuário para digitar uma temperatura
// (valor inteiro ou float).
// o Retorna a temperatura lida.
// ● Crie uma função verificar_alerta_temperatura(temperatura):
// o Recebe a temperatura.
// o Se a temperatura for menor que 10 ou maior que 30, retorna True (alerta).
// o Caso contrário, retorna False.
// ● Crie uma função emitir_mensagem_alerta(status_alerta):
// o Recebe o status_alerta (True ou False).
// o Se status_alerta for True, imprime &quot;ALERTA: Temperatura fora da faixa ideal!&quot;.
// o Se status_alerta for False, imprime &quot;Temperatura dentro da faixa normal.&quot;.
export function exercicio2() {
    function ler_temperatura() {
        let num = Number(prompt("Digitar uma temperatura"));
        return num;
    }
    function verificar_alerta_temperatura(temperature) {
        if (temperature < 10 || temperature > 30) {
            return true;
        }
        else {
            return false;
        }
    }
    function emitir_mensagem_alerta(temperature) {
        if (temperature === true) {
            return 'ALERTA: Temperatura fora da faixa ideal!';
        }
        else {
            return 'Temperatura dentro da faixa normal';
        }
    }
    let readmeTeperature = ler_temperatura();
    let verifyTemperature = verificar_alerta_temperatura(readmeTeperature);
    alert(emitir_mensagem_alerta(verifyTemperature));
}
//# sourceMappingURL=exercicio2.js.map