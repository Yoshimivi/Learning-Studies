let nota = 61
let notaLetra = ''

function notasNumericoParaLetras () {
  if (nota >= 90) {
    notaLetra = 'A'
  } else if (nota >= 80 ) {
    notaLetra = 'B'
  } else if (nota >= 70 ) {
    notaLetra = 'C'
  } else if (nota >= 60 ) {
    notaLetra = 'D'
  } else {
    notaLetra = 'F'
  }
  console.log (notaLetra)
}

notasNumericoParaLetras() 