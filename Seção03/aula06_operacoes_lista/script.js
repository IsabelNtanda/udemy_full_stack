/*
let lista = ['Isabel', 'Joao', 'Lucas','Maria']
// Map = percorre todo um array
lista.map((item,index)=>{
  console.log(`Passando: ${item} - esta na posicao ${index}`)

})
*/

// trabalhando com reduce

let numeros = [5,3,2,5]

let total = numeros.reduce((acumulador,numero,indice,original)=>{
console.log(`${acumulador} - total ate o momento`)
console.log(`${numero} - valor atual`)
console.log(`${indice} indice atual`)
console.log(`${original} array original`)
console.log('=============================')

return acumulador += numero

})

console.log(` TOTAL DO REDUCE ${total}`)