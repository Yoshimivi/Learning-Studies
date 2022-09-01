// celsius > fahrenheit =
// C = (F - 32) * 5/9

// fahrenheit > celsius =
// F = C *9/5 + 32

function converterGraus(graus) {
  const celsiusExiste = graus.toUpperCase().includes('C')
  const fahrenheitExiste = graus.toUpperCase().includes('F')

  if (!celsiusExiste && !fahrenheitExiste) {
    console.log('Erro ao calcular, verifique as informações')
  } else if (celsiusExiste) {
    const numeroGrausC = Number(graus.toUpperCase().replace('C', ''))
    const grausConvertido = (numeroGrausC * 9) / 5 + 32
    console.log(parseInt(grausConvertido) + 'F') // celsius para fahrenheit
  } else {
    const numeroGrausF = Number(graus.toUpperCase().replace('F', ''))
    grausConvertido = ((numeroGrausF - 32) * 5) / 9
    console.log(parseInt(grausConvertido) + 'C') // fahrenheit para celsius
  }
}

converterGraus('100F')
converterGraus('15C')
converterGraus('50A')
