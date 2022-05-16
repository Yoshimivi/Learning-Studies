function calcularIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`
}

const pessoa1 = {
  nome: 'Maria',
  idade: 30
}

const pessoa2 = {
  nome: 'Cleber',
  idade: 20
}

const pessoa3 = {
  nome: 'Antonio',
  idade: 70
}

const animal1 = {
  nome: 'Rodolfo',
  idade: 10,
  raca: 'Shiba Inu'
}

const animal2 = {
  nome: 'Robson',
  idade: 3,
  raca: 'Pincher'
}

console.log(calcularIdade.call(pessoa2, 20))
console.log(calcularIdade.call(animal2, 5))

console.log(calcularIdade.apply(pessoa3, [15]))
console.log(calcularIdade.apply(animal1, [4]))
