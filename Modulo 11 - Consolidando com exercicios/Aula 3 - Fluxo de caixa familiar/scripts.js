/* ### Sistema de gastos familiar

    Crie um objeto que possuira 2 proriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma funcao que ira calcular o total de receitas e despesas e ira mostrar
uma mensagem se a familia esta com saldo positivo ou negativo

*/

let saldoFamilia = {
    receitas: [5000, 1200.25, 2000],
    despesas: [5000.50, 1200, 100, 1800, 10]
}


function calculateExtraMoney(saldoFamiliar) {
    let receitaTotal = 0
    let despesasTotal = 0
    
    for(let i = 0; i < saldoFamilia.receitas.length; i++){
        receitaTotal += saldoFamilia.receitas[i]
    }
    for(let i = 0; i < saldoFamilia.despesas.length; i++){
        despesasTotal += saldoFamilia.despesas[i]
    }
    let saldoTotal = receitaTotal - despesasTotal
    let itsOk = saldoTotal >= 0
    let balanceText = "negativo"
    if(itsOk){
        balanceText = "positivo"
    }

    return console.log(`    o total da receita familia e de ${receitaTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
    o total ded despesas da familia e de ${despesasTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
    o saldo final e de ${saldoTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} terminando no ${balanceText}` )
}

calculateExtraMoney(saldoFamilia)