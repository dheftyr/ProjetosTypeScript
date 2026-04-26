// Faça um programa para o cálculo de uma folha de pagamento fictício, sabendo que os
// descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo),
// 3% para o Sindicato, 6% de vale transporte, 8% de vale alimentação, 10% do INSS e o FGTS
// que corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).
// O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá
// pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
// Desconto do IR:
// 1. Salário Bruto até R$ 2428,80 (inclusive) - isento
// 2. Salário Bruto de R$ 2.428,81 a R$ 2.826,65 (inclusive) - desconto de 7,5%
// 3. Salário Bruto de R$ 2.826,66 a R$ 3.751,05 (inclusive) - desconto de 15%
// 4. Salário Bruto de R$ 3.751,06 a R$ 4.664,68 (inclusive) - desconto de 22,5%
// 5. Salário Bruto acima de R$4664,68 - desconto de 27,5%.
// Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora
// é R$15,00 e a quantidade de horas é 220.
let ir, sindicato = 0, valeAli = 0, valeTrans, fgts = 0, inss = 0, valorSalarioBruto = 0, porcenIr = 0, totalDesc = 0, valorLiqui = 0;
let valorHora = Number(prompt("Digite o valor da hora:"));
let horasTrabalhadas = Number(prompt("Digite quantidade de horas trabalhadas"));
valorSalarioBruto = valorHora * horasTrabalhadas;
sindicato = valorSalarioBruto * 0.03;
valeAli = valorSalarioBruto * 0.08;
valeTrans = valorSalarioBruto * 0.06;
inss = valorSalarioBruto * 0.1;
fgts = valorSalarioBruto * 0.11;
if (valorSalarioBruto < 2428.80) {
    ir = 0;
    porcenIr = 0;
}
else if (valorSalarioBruto >= 2428.81 && valorSalarioBruto <= 2826.65) {
    ir = valorSalarioBruto * 0.075;
    porcenIr = 7.5;
}
else if (valorSalarioBruto >= 2826.66 && valorSalarioBruto <= 3751.05) {
    ir = valorSalarioBruto * 0.15;
    porcenIr = 15;
}
else if (valorSalarioBruto >= 3751.06 && valorSalarioBruto <= 4664.68) {
    ir = valorSalarioBruto * 0.225;
    porcenIr = 22.5;
}
else {
    ir = valorSalarioBruto * 0.275;
    porcenIr = 27.5;
}
valorLiqui = valorSalarioBruto - (sindicato + valeAli + valeTrans + inss + ir + fgts);
totalDesc = sindicato + valeAli + valeTrans + inss + ir + fgts;
alert(`Folha de Pagamento:
----------------------------------------------------------
Salário Bruto:                  R$ ${valorSalarioBruto.toFixed(2)}
(-) IR (${porcenIr}%):                     R$ ${ir.toFixed(2)}
(-) INSS (10%):               R$ ${inss.toFixed(2)}
(-) SINDICATO (3%):           R$ ${sindicato.toFixed(2)}
(-) V.ALIM. (8%):             R$ ${valeAli.toFixed(2)}
(-) V.TRANSP. (6%):         R$ ${valeTrans.toFixed(2)}
-----------------------------------------------------------
FGTS (11% - Depósito):     R$ ${fgts.toFixed(2)}
Total de Descontos:           R$ ${totalDesc.toFixed(2)}
Valor Líquido:                    R$ ${valorLiqui.toFixed(2)}`);
export {};
//# sourceMappingURL=exercicio6.js.map