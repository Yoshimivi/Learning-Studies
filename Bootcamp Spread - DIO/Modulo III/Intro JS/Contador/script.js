var texto = document.querySelector('span#atual')
var atual = 0

function somar() {
    if (atual < 15) {
        atual ++
        texto.innerHTML = atual
        color()
    } else {
        alert('Valor maximo alcançado')
    }
}

function subtrair() {
    if (atual > -15) {
        atual --
        texto.innerHTML = atual
        color()
    } else {
        alert('Valor minimo alcançado')
    }
}

function somar5() {
    if (atual < 15) {
        atual += 5
        texto.innerHTML = atual
        color()
    } else {
        alert('Valor maximo alcançado')
    }
}

function subtrair5() {
    if (atual > -15) {
        atual -= 5
        texto.innerHTML = atual
        color()
    } else {
        alert('Valor minimo alcançado')
    }
}

function color() {
    if (atual == 0) {
        texto.style.color = 'black'
    } else if (atual < 0) {
        texto.style.color = 'red'
    } else {
        texto.style.color = 'green'
    }
}

function reset() {
    atual = 0
    texto.innerHTML = 0
    color()
}