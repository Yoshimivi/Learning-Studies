function contar () {
    let ini = Number(document.getElementById('inic').value)
    let end = Number(document.getElementById('end').value)
    let pass = Number(document.getElementById('pass').value)
    let r = document.getElementById('res')
    r.innerHTML = 'O resultado é <br/>'
     for (let c = ini; c <= end; c += pass) {
         r.innerHTML += `${c} \u{1F51D} `
     }
}





// for (var c = 1; c <= 10; c++) {
//     console.log (c)
// }