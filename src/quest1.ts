let entrada = Number(prompt('Digite un númegjhjhghro:'));

let number: number = entrada;


function verify(num: number): string{
    if(num > 0 ){
        return "Número positivo!";
    }else if(number <= 0){
        return 'Número negativo!';
    }else{
        return 'Número 0';
    }
}

alert(verify(number));

