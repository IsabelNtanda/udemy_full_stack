/*
function convidados(primeironome, segundonome, terceironome){
console.log('SEJAM BEM VINDO TODOS CONVIDADOS')
console.log(primeironome)
console.log(segundonome)
console.log(terceironome)
}
convidados('Isabel', 'Matheus', 'Maria')
*/

/*
function convidados(...nomes)
{
console.log('SEJAM BEM VINDOS TODOS CONVIDADOS')
console.log(nomes)
}
convidados('ISABEL', 'ANTONIO', 'MIGUEL')
*/

function sorteador(...numeros){
console.log(numeros)
const numeroGerado = Math.floor(Math.random()*numeros.length)

console.log('Numeros gerados foi:' + numeros[numeroGerado])
}
sorteador(1,4,5,15,90,55,34)

