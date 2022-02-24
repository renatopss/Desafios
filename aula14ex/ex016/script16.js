function contar() {
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")
    
   if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       //alert('[ERRO] Verifique se todos os campos estão preeenchidos!')
       res.innerHTML = 'Impossivel contar!'
   } else {
       res.innerHTML = 'contado: <br>'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (p <= 0 || p > f){
           //para nao crashar a pagina
           alert('Passo inválido!( sera considerado PASSO 1.')
           p = 1
       }
        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F6EB} `
       }
    } else {
        //contagem regresiva
        for(let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F6EC}`
        }
    }
    res.innerHTML += `\u{1F6EC}`
   }
}