const escola = "Cod3r"//C=0 o=1 d=2 3=3 r=4

console.log(escola.charAt(4)) //letra do indicie 4 dentro dessa String
console.log(escola.charAt(5)) //nao encontrou indice 5, da como vazio
console.log(escola.charCodeAt(3)) //valor na tabela UniCode do indice 3
console.log(escola.indexOf('3')) /* -1 nao tem o valor no indice, retorna a
posicao do indice que se encontra o valor procurado*/
console.log(escola.substring(1)) //o indice da string começa pelo valor dentro dos ()