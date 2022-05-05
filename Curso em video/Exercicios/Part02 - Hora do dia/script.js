
var agora = new Date ()
var hora = agora.getHours ()
var min = agora.getMinutes ()
//var img = window.document.getElementById('imagem')
//hora = 1
if (hora == 1) {
    msg.innerHTML = (`Agora é ${hora} hora e ${min} minutos!`)
    imagem.src = 'pdaybreak.png'
    msg2.innerHTML = (`Boa madrugada!`)
    document.body.style.background = '#2A2E33' 
} else if (hora < 6) {
    msg.innerHTML = (`Agora são ${hora} horas e ${min} minutos!`)
    imagem.src = 'pdaybreak.png'
    msg2.innerHTML = (`Boa madrugada!`)
    document.body.style.background = '#2A2E33'
} else if (hora < 12) {
    msg.innerHTML = (`Agora são ${hora} horas e ${min} minutos!`)
    imagem.src = 'pmorning.png'
    msg2.innerHTML = (`Bom dia!`)
    document.body.style.background = '#FC9800'
} else if (hora < 19) {
    msg.innerHTML = (`Agora são ${hora} horas e ${min} minutos!`)
    imagem.src = `pevening.png`
    msg2.innerHTML = (`Boa tarde!`)
    document.body.style.background = '#453156'
} else {
    msg.innerHTML = (`Agora são ${hora} horas e ${min} minutos!`)
    imagem.src = `pnight.png`
    msg2.innerHTML = (`Boa noite`)
    document.body.style.background = '#03293C'
}