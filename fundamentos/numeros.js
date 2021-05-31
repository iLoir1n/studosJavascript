const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
/*Number.isInteger(peso1) =  esta verificando
*se o Number é inteiro (Intenger) da variavel peso1 */

const avaliacao1 = 8.33
const avaliacao2 = 7.99
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) // duas casas decimais


const n1 = 8.335
const n2 = 7.995
const notaTotal = n1 + n2
const nMedia = notaTotal / 2
console.log(nMedia.toFixed(2)) // duas casas decimais
console.log(nMedia.toString(2)) // em binário
console.log(typeof nMedia)

/* Number = Function
* number = tipo de dado */