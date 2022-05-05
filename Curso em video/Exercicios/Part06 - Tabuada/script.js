function calc() {
    
    let num1 = document.getElementById('num')
    let num = Number(num1.value)
    let vzs = 1
    let res = document.getElementById('res')
    let list = document.getElementById('listaS')
    if (num1.value.length == 0) {
        window.alert('Verifique o valor digitado.')
    } else {
        res.innerHTML = ' '
        list.innerHTML = ' '
        while (vzs <= 10) {
             res.innerHTML += `${num} x ${vzs} = ${num * vzs}<br/>`
             let option = document.createElement('option')
             option.innerHTML = `${num} x ${vzs} = ${num * vzs}`
             list.appendChild(option)
             vzs++
         }
    }
}