function calculo() {
    var n1 = document.getElementById('nota1').value 
    var n2 = document.getElementById('nota2').value 
    var res = document.getElementById('res')
    var media = (Number(n1) + Number(n2))/2
    //alert(`Media do valor: ${media}`)
    if (media >= 7) {
        var pass = 'Aprovado!'
    } else {
        var pass ='Reprovado!'
    }
    res.innerHTML = `Sua media é ${media}, voce foi ${pass} `
}