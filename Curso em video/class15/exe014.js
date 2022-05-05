let num = [5, 8, 4]
num [3] = 6         //adiciona na posição [x] 
num.push(7)         //adiciona no final
num.length          //mostra quantas posições tem dentro do vetor
//num.sort()          //organiza os numeros dentro do vetor em ordem

console.log (num)
console.log (`O vetor tem ${num.length} posições.`)
console.log (`O primeiro vetor é o ${num[0]}`)     
console.log (`Numeros do vetor em ordem ${num.sort()}`)
console.log (num)

console.log (num.indexOf(6)) //procura o valor entre () no conjunto e retorna a posição
                             //se não encontrar, retorna o valor -1

/*
for (let pos = 0; pos < num.length; pos++) {
    console.log (`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (let pos in num) {              //forma simplificada do FOR
    console.log (`A posição ${pos} tem o valor ${num[pos]}`)
}