function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                //crianaça
                img.setAttribute('src', 'bebeM.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemM.jpg')
            }else if (idade <50) {
                //adulto
                img.setAttribute('src', 'adultoM.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'idosoM.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                //crianaça
                img.setAttribute('src', 'bebeF.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemF.jpg')
            }else if (idade <50) {
                //adulto
                img.setAttribute('src', 'adultoF.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'idosoF.jpg')
            }
        }
        res.style.textAlign = 'center'// centraliza texto
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}