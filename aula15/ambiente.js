let num = [5, 8, 2, 9, 3]

num.sort()

num.push(1)
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`primeiro valor do vetor é ${0}`)

let pos = num.lastIndexOf(7)
if (pos == -1) {
    console.log('O valor nao foi encontrado!')
}else{
    console.log(`O valor 8 esta na posição ${pos}`)
}
