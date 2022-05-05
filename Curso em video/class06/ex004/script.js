
    //Formatação de strings
        var nome = window.prompt('Qual o seu nome?')
        document.write(`Olá <strong>${nome}</strong>, seu nome tem ${nome.length} letras.<br>`)
        document.write(`Seu nome em letras maiusculas é ${nome.toUpperCase()}.<br>`)
        document.write(`E seu nome em letras minusculas é ${nome.toLowerCase()}.`)
    

    //Formatação de number
        var numero = Number(window.prompt('Digite um numero'))
        document.write(`<p>E o numero que voce digitou é ${numero}<br>`)
        document.write(`Seu numero em BRL é ${numero.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}<br>`)
        document.write(numero.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
    //numero.toFixed(3) = 142.500
    //numero.toFixed(1).replace('.', ',') = 142,5
    //numero.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) = R$ 142,50
