let txtTask = document.getElementById('txtTasks')
let listTasks = document.querySelector("div.listTasks")
var checkbox = document.createElement ('input')

function add() {
    if (txtTask.value.length <= 0) {
        alert('Digite algo!')
    } else {
    checkbox.type = 'checkbox'
    listTasks.appendChild(checkbox)
    listTasks.innerHTML += `${txtTask.value} <br/>`
    txtTask.focus ()
    txtTask.value=''
    }
}

function clean() {
    listTasks.innerHTML=''
}