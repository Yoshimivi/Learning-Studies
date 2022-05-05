function calcular (){
    var tvel = window.document.getElementById('txtvel')
    var vel = Number(tvel.value)
    var res = window.document.getElementById('res')
    var mul = 'MULTADO'
    //mul.style.color = 'red'
    res.innerHTML = `<p>Sua velocidade é de <strong> ${vel} KM/h.</p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você foi <strong style="color: rgb(177, 2, 2)">${mul}</strong> por excesso de velocidade.</p>`
    }
    res.innerHTML += '<p>Dirija sempre com segurança!</p>'
}