function parimp (n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

var x = 12
let res = parimp (x)
console.log (res)
console.log (parimp(23))