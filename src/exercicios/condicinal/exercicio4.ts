// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.


let number1: number = Number(prompt("Digite o primeiro número: "));
let number2: number = Number(prompt("Digite o segundo número: "));

if(number1 === number2){
    alert(`Números iguais`);
}else if(number1 > number2){
    alert(`Primeiro é maior`);
}else{
    alert(`Segundo é maior`);
}
