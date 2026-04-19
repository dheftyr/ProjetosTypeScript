// 4. Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
// de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while
// para ir subtraindo do valor total.

let cont50:number = 0;
let cont20:number = 0;
let cont10:number = 0;
let resto:number = 0;

function saque(num:number) {

    while(true){
        if(num > 50){
            num -= 50;
            cont50++;
        }else if(num > 20){
            num -= 20;
            cont20++; 
        }else if(num >= 10){
            num -= 10;
            cont10++
        }else{
            resto = num;
            break;
        }

    }
}

let number:number = Number(prompt("Digite o saque"));

saque(number);

alert(`Qantidade de notas a serem tiradas: \nNotas de 50 = ${cont50} \nNotas de 20 = ${cont20} \nNotas de 10 = ${cont10} \nResto = ${resto}`);