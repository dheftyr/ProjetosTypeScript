// Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na
// variável mês, um número entre 1 e 12, correspondendo a um dos meses do ano. No final,
// você deve imprimir uma mensagem conforme o exemplo: &quot;A estação do ano correspondente
// ao mês 3 é Verão&quot; Considere a estação prevalente para cada mês:
// a) Janeiro (1): Verão
// b) Fevereiro (2): Verão
// c) Março (3): Verão
// d) Abril (4): Outono
// e) Maio (5): Outono
// f) Junho (6): Outono
// g) Julho (7): Inverno
// h) Agosto (8): Inverno
// i) Setembro (9): Inverno
// j) Outubro (10): Primavera
// k) Novembro (11): Primavera
// l) Dezembro (12): Primavera
let number = Number(prompt("Digite um número de 1 a 12:"));
if (number === 1 || number === 2 || number === 3) {
    alert(`Mês ${number}: Verão`);
}
else if (number === 4 || number === 5 || number === 6) {
    alert(`Mês ${number}: Outono`);
}
else if (number === 9 || number === 8 || number === 9) {
    alert(`Mês ${number}: Inverno`);
}
else if (number === 10 || number === 11 || number === 12) {
    alert(`Mês ${number}: Primavera`);
}
else {
    alert("Opção não correspondente ao mês");
}
export {};
//# sourceMappingURL=exercicio2.js.map