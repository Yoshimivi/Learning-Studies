let familia = {
  receita: [1200, 900, 2000, 200],
  despesas: [2500, 100, 50, 400, 5000]
}

function somar(array) {
  let total = 0

  for(let valor of array) {
    total += valor
  }

  return total
}

function calcularCaixa() {
  const calculaReceita = somar(familia.receita)
  const calculaDespesa = somar(familia.despesas)

  const total = calculaReceita - calculaDespesa

  if (total >= 0) {
    console.log(`Saldo positivo de ${total}`)
  } else {
    console.log(`Saldo negativo de ${total}`)
  }
}

calcularCaixa()
