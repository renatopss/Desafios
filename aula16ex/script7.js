let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))// adicionando numero do input no vetor
        let item = document.createElement('option')// criando elementos dinaamico
        item.text = `Adicionado ${num.value}`// mosta oque foi adicionado
        lista.appendChild(item)
        res.innerHTML = ''//limpa resultado
    } else {
        alert('Valor invalido ou ja adicionado.')
    }
    num.value = ''//limpa o compora digitado
    num.focus()// volta o foco ao campo digitado
}

function finalizar() {
    if (valores.length == 0){
        alert('Adicione valores!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {// da inicio a verificação de +/-
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]    
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} numeros.</p>`
        res.innerHTML += `<p>O maior valor informado ${maior} e o menor ${menor}</p>`
        res.innerHTML +=`<p> ${soma}</p>`
        res.innerHTML += `<p> media ${media}</p>`


    }
}