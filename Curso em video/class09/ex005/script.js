var corpo = window.document.body
var p1 = window.document.getElementsByTagName('p')[1]
window.document.write('Paragrafo 2 está escrito assim: ' + p1.innerHTML)
corpo.style.background = 'grey'
p1.style.color = 'blue'
var d = window.document.getElementById('msg')
d.style.color = 'black'
var e = document.querySelector('div#msg2')
e.style.background = 'green'