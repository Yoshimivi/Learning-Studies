const alunos = [
  {
    nome: 'Victor',
    nota: '5',
    turma: '1A'
  },
  {
    nome: 'Matheus',
    nota: '3',
    turma: '2A'
  },
  {
    nome: 'Pedro',
    nota: '7',
    turma: '1B'
  },
  {
    nome: 'Enzo',
    nota: '9',
    turma: '1B'
  },
  {
    nome: 'Danilo',
    nota: '4',
    turma: '2B'
  }
]

function alunosAprovados(arr, media) {
  let aprovados = []

  for (let i = 0; i < arr.length; i++) {
    const { nota, nome } = arr[i]
    if (nota >= media) {
      aprovados.push(nome)
    }
  }

  return aprovados
}

console.log(alunosAprovados(alunos, 5))
