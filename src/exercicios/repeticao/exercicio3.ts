// 3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.

class Operarios {

    private nome: string;
    private sexo: string;
    private horasTra: number;
    private salarioHor: number;
    private salario: number


    constructor(nome: string, sexo: string, horasTra: number, salarioHor: number) {
        this.nome = nome;
        this.sexo = sexo;
        this.horasTra = horasTra;
        this.salarioHor = salarioHor;
        this.salario = horasTra * salarioHor;
    }

    
    public get getNome() : string {
        return this.nome;
    }
    
    public set setNome(nome: string) {
        this.nome = nome;
    }
    
      public get getSexo() : string {
        return this.sexo;
    }

    public set setSexo(sexo: string) {
        this.sexo = sexo;
    }

      public get getHorasTra() : number {
        return this.horasTra;
    }
    
    public set setHorasTra(horasTra: number) {
        this.horasTra = horasTra;
    }

    public get getSalarioHor() : number {
        return this.salarioHor;
    }
    
    public set setSalarioHor(salarioHor: number) {
        this.salarioHor = salarioHor;
    }
    
    public get getSalario() : number {
        return this.salario;
    }
    
    public set setSalario(salario: number) {
        this.salario = salario;
    }
}

let operario;

let listaOperario: Operarios[] = [];

let percentualF: number = 0;
let percentualM: number = 0;
let quantidadeFun: number = 0;
let funcionarioF: number = 0;
let funcionarioM: number = 0
let maiorSalario: number = 0;
let nomeMaiorSal: string = "";

while (true) {

    let nome: string = prompt("Digite o nome:") ?? "";
    let sexo: string = prompt("Digite F(Feminio) ou M(Masculino):") ?? "";
    let horasTra : number = Number(prompt("Digite a quantidade de horas trabalhada:"));
    let salarioHor : number = Number(prompt("Digite o valor da hora:"));

    operario = new Operarios(nome, sexo, horasTra, salarioHor);

    listaOperario.push(operario);

    let op: number = Number(prompt("Digite: \n1 - Sair \n"));

    if(op === 1){
        alert("Saindo do programa");
        break;
    }
}

    for(let i = 0; i < listaOperario.length; i++){
        let operarioAtual = listaOperario[i]!;
        quantidadeFun++;

        if(operarioAtual.getSexo.toUpperCase() === 'F'){
            funcionarioF++;
        }else{
            funcionarioM++
        }
    
        if(operarioAtual.getSalario > maiorSalario){
            maiorSalario = Number(operarioAtual.getSalario);
            nomeMaiorSal = operarioAtual.getNome;
        }


}

percentualF = (funcionarioF / quantidadeFun)*100;
percentualM = (funcionarioM / quantidadeFun)*100;

alert(`Nome: ${nomeMaiorSal} \nMaior salário: ${maiorSalario} \nQuantidade funcionário: ${quantidadeFun}` + 
    `\nFuncionário Masculino: ${funcionarioM} \nFuncionário Feminino: ${funcionarioF} \nPorcentagem Masculino: ${percentualM} \nPorcentagem Feminino: ${percentualF}`
);