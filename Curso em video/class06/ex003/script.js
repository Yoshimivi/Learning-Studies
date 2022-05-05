var n1 = Number.parseFloat(window.prompt('Digite um numero'))
        var n2 = Number.parseInt(window.prompt('Digite outro numero (inteiro)'))
        var n3 = Number(window.prompt('Digite o ultimo numero'))
        var soma = n1 + n2 + n3
        window.alert(`A soma entre ${n1}, ${n2} e ${n3} é igual a ${soma}!!`)
        // + para adição = number + number
        // + para concatenação = string + string


        //converter string p/ number = Number(), Number.parseInt() ou Number.parseFloat()
        //converter number p/ string = String(n) ou n.toString()