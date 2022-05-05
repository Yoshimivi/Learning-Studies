let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Número inválido ou já se encontra na lista.')
    }
    num.value = ''
    num.focus()
}

function analize() {
    if (valores.length <= 0) {
        window.alert('Adicione mais valores.')
    } else {
        let ton = valores.length
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
        }
valores.sort()
media = soma / ton
res.innerHTML = ''
res.innerHTML += `<p>Ao todo, temos ${ton} números cadastrados.</p>`
res.innerHTML += `<p>O maior número informado foi ${valores[ton-1]}.</p>`
res.innerHTML += `<p>O menor número informado foi ${valores[0]}.</p>`
res.innerHTML += `<p>A soma dos números é ${soma}.</p>`
res.innerHTML += `<p>A média dos números é ${media}.</p>`
    }
}

function reset() {
    res.innerHTML = ''
    list.innerHTML = ''
    valores = []
}