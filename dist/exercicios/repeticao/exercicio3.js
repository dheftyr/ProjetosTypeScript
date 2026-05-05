// 3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.
export function exercicio3() {
    class Operarios {
        nome;
        sexo;
        horasTra;
        salarioHor;
        salario;
        constructor(nome, sexo, horasTra, salarioHor) {
            this.nome = nome;
            this.sexo = sexo;
            this.horasTra = horasTra;
            this.salarioHor = salarioHor;
            this.salario = horasTra * salarioHor;
        }
        get getNome() {
            return this.nome;
        }
        set setNome(nome) {
            this.nome = nome;
        }
        get getSexo() {
            return this.sexo;
        }
        set setSexo(sexo) {
            this.sexo = sexo;
        }
        get getHorasTra() {
            return this.horasTra;
        }
        set setHorasTra(horasTra) {
            this.horasTra = horasTra;
        }
        get getSalarioHor() {
            return this.salarioHor;
        }
        set setSalarioHor(salarioHor) {
            this.salarioHor = salarioHor;
        }
        get getSalario() {
            return this.salario;
        }
        set setSalario(salario) {
            this.salario = salario;
        }
    }
    let operario;
    let listaOperario = [];
    let percentualF = 0;
    let percentualM = 0;
    let quantidadeFun = 0;
    let funcionarioF = 0;
    let funcionarioM = 0;
    let maiorSalario = 0;
    let nomeMaiorSal = "";
    while (true) {
        let nome = prompt("Digite o nome:") ?? "";
        let sexo = prompt("Digite F(Feminio) ou M(Masculino):") ?? "";
        let horasTra = Number(prompt("Digite a quantidade de horas trabalhada:"));
        let salarioHor = Number(prompt("Digite o valor da hora:"));
        operario = new Operarios(nome, sexo, horasTra, salarioHor);
        listaOperario.push(operario);
        let op = Number(prompt("Digite: \n1 - Sair \n"));
        if (op === 1) {
            alert("Saindo do programa");
            break;
        }
    }
    for (let i = 0; i < listaOperario.length; i++) {
        let operarioAtual = listaOperario[i];
        quantidadeFun++;
        if (operarioAtual.getSexo.toUpperCase() === 'F') {
            funcionarioF++;
        }
        else {
            funcionarioM++;
        }
        if (operarioAtual.getSalario > maiorSalario) {
            maiorSalario = Number(operarioAtual.getSalario);
            nomeMaiorSal = operarioAtual.getNome;
        }
    }
    percentualF = (funcionarioF / quantidadeFun) * 100;
    percentualM = (funcionarioM / quantidadeFun) * 100;
    alert(`Nome: ${nomeMaiorSal} \nMaior salário: ${maiorSalario} \nQuantidade funcionário: ${quantidadeFun}` +
        `\nFuncionário Masculino: ${funcionarioM} \nFuncionário Feminino: ${funcionarioF} \nPorcentagem Masculino: ${percentualM} \nPorcentagem Feminino: ${percentualF}`);
}
//# sourceMappingURL=exercicio3.js.map