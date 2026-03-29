let number: number = Number(prompt("Digite a opção: \n1 - Soma \n2 - Subtração \n3 - Divisão \n4 - Multiplicação"));

switch (number) {
    case 1:
        let soma = 0;

        let numberS1: number = Number(prompt("Digite o primeiro número:"));
        let numberS2: number = Number(prompt("Digite o segundo número:"));

        soma = numberS1 + numberS2;;

        alert(`Resultado da soma: ${soma}`);
        break;
    case 2:
        let subtração = 0;

        let numberSb1: number = Number(prompt("Digite o primeiro número:"));
        let numberSb2: number = Number(prompt("Digite o seugundo número:"));

        subtração = numberSb1 - numberSb2;

        alert(`Resultado da subtração: ${subtração}`);
        break;
    case 3:
        let divisao = 0;

        let numberD1: number = Number(prompt("Digite o primeiro número:"));
        let numberD2: number = Number(prompt("Digite o seugundo número:"));

        if(numberD1 === 0){
            alert(`O divisor não pode ser ${numberD1}`)
        }else{
            divisao = numberD1 / numberD2;
            alert(`Resultado da divisão: ${divisao}`)
        }
        break;
    case 4:
        let multiplicacao = 0;

        let numberM1: number = Number(prompt("Digite o primeiro número:"));
        let numberM2: number = Number(prompt("Digite o seugundo número:"));

        multiplicacao = numberM1 * numberM2;

        alert(`Resultado da multiplicação ${multiplicacao}`);
        break
    default:
        alert(`Número não correspondente a opção!`)
        break;
}