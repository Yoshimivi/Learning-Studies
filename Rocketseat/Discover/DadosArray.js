const livrosPorCategoria = [
  {
    categoria: 'Riqueza',
    livros: [
      {
        titulo: 'Os segredos da mente milionária',
        autor: 'T. Harv Eker'
      },
      {
        titulo: 'O homem mais rico da Babilônia',
        autor: 'George S. Clason'
      },
      {
        titulo: 'Pai rico, pai pobre',
        autor: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ],
  },
  {
    categoria: 'Inteligencia Emocional',
    livros: [
      {
        titulo: 'Você é Insubstítuivel',
        autor: 'Augusto Cury'
      },
      {
        titulo: 'Ansiedade - Como enfrentar o mal do século',
        autor: 'Augusto Cury'
      },
      {
        titulo: 'Os 7 hábitos das pessoas altamente eficazes',
        autor: 'Stephen R. Covey'
      }
    ],
  }
]

const totalCategorias = livrosPorCategoria.length
console.log('Total de categorias', totalCategorias)

for(let categoria of livrosPorCategoria) {
  console.log('Total de livros na categoria', categoria.categoria, 'é:', categoria.livros.length)
}

function contarAutores() {
  let autores = []

  for(let categoria of livrosPorCategoria) {
    for(let livros of categoria.livros) {
      if(autores.indexOf(livros.autor) == -1) {
        autores.push(livros.autor)
      }
    }
  }
  console.log('Total de autores: ', autores.length)
}

contarAutores()


function LivrosDoAutor(autor) {
  let livros = []

  for(let categoria of livrosPorCategoria) {
    for(let livro of categoria.livros) {
      if(livro.autor === autor) {
        livros.push(livro.titulo)
      }
    }
  }
  console.log(`Livros de ${autor}: ${livros.join(', ')}`)
}

LivrosDoAutor('George S. Clason')
LivrosDoAutor('Augusto Cury')