function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var tano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (tano.value.length == 0 || tano.value > ano) {
        window.alert('[ERRO] Verifique seus dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(tano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >=0 && idade < 14) {
                img.setAttribute('src', 'childm.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'teenm.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'adultm.png')
            } else {
                img.setAttribute('src', 'oldm.png')
            }
        } else {
            gen = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'childf.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'teenf.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'adultf.png')
            } else {
                img.setAttribute('src', 'oldf.png')
            }
        }
        res.innerHTML = `Detectamos <strong>${gen}</strong> com <strong>${idade}</strong> anos de idade.`
        res.appendChild(img)
    }
}