let number1: number = Number(prompt("Digite o primeiro número: "));
let number2: number = Number(prompt("Digite o segundo número: "));

if(number1 === number2){
    alert(`Números iguais`);
}else if(number1 > number2){
    alert(`Primeiro é maior`);
}else{
    alert(`Segundo é maior`);
}
