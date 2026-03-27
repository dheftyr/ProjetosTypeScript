let num = Number(prompt("Digite um número:"));

let numJs: number = num;

function verifyPairOrOdd(num: number): string{
    if(num % 2 === 0){
        return "Par";
    }else{
        return "Ímpar";
    }
}

alert(verifyPairOrOdd(numJs));