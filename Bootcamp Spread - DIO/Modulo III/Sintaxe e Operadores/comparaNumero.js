function compara (n1, n2) {
    if (!n1 || !n2) {
        return `Defina 2 numeros`
    }
    let soma = n1 + n2
    let igualdif = 0
    res10 = 0
    res20 = 0

    if (n1 == n2) {
        igualdif = `iguais`
    } else {
        igualdif = `diferentes`
    }
    
    if (soma < 10) {
        res10 = `menor do que 10`
    } else if (soma == 10) {
        res10 = `igual a 10`
    } else {
        res10 = `maior do que 10`
    }
    
    if (soma < 20) {
        res20 = `menor do que 20`
    } else if (soma == 20) {
        res20 = `igual a 20`
    } else {
        res20 = `maior do que 20`
    }

    return `Os numeros ${n1} e ${n2} são ${igualdif}. Sua soma é ${soma}, que é ${res10} e ${res20}.`
}

console.log (compara(5, 5))