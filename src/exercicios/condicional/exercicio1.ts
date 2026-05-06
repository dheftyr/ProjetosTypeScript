// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo


export function exercicio1(): void {

    let number: number = Number(prompt("Digite um número:"));

    alert((number % 2 === 0) ? `O número ${number} é Par!` : `O número ${number} é Ímpar!`);
    alert((number > 0) ? `O número ${number} é Positivo!` : `O número ${number} é Negativo!`);
}