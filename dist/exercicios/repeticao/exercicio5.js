// 5. Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
//  Função classificarVenda(valor):
// o Se valor &lt; 1000: Retorna &quot;Bronze&quot;
// o Se valor entre 1000 e 5000: Retorna &quot;Prata&quot;
// o Se valor &gt; 5000: Retorna &quot;Ouro&quot;
//  O Programa:
// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
//  O total de vendas da equipe (soma).
//  Quem foi o vendedor com a maior venda (maior valor digitado).
//  Quantos vendedores atingiram a categoria &quot;Ouro&quot;.
export function exercicio5() {
    let sumSale = 0;
    let highestSale = 0;
    let bestSeller = '';
    let goldCount = 0;
    function classificarVenda(value) {
        if (value < 1000) {
            return 'Bronze';
        }
        else if (value >= 1000 && value <= 5000) {
            return 'Prata';
        }
        else {
            return 'Ouro';
        }
    }
    for (let i = 0; i < 5; i++) {
        let sale = Number(prompt(`Digite o valor da venda do ${(i + 1)}º vendedor:`));
        sumSale += sale;
        if (classificarVenda(sale) === 'Ouro') {
            goldCount++;
        }
        if (sale > highestSale) {
            highestSale = sale;
            bestSeller = `${(i + 1)}° Vendedor`;
        }
    }
    alert(`Total de Vendas: R$ ${sumSale.toFixed(2)} 
    Vendedor com maior venda: ${bestSeller} (R$ ${highestSale.toFixed(2)})
    Quantidade de vendedores (Ouro): ${goldCount}`);
}
//# sourceMappingURL=exercicio5.js.map