var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrou)
a.addEventListener('mouseleave', saiu)

function clicar () {
    a.innerText = '!!!'
    a.style.background = 'red'
}
function entrou () {
    a.innerText = 'entrou'
    a.style.background = 'green'
}
function saiu () {
    a.innerText = 'Interaja...'
    a.style.background = 'rgb(21, 160, 160)'
}