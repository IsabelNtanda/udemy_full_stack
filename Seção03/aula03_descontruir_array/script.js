//..... descontuindo um objecto
let pessoa = {
nome:'Isabel',
sobrenome:'Pereira',
empresa:'Sujeito programador',
cargo:'programador fulllstack'
};

 //console.log(pessoa.nome)
// console.log(pessoa.cargo)
/*
let nome= 'test' 
const {nome:nomePessoa,cargo,empresa,sobrenome}= pessoa
console.log(nomePessoa)
console.log(sobrenome)
console.log(empresa)
console.log(cargo)
*/
//......................................Descontruindo um array
let nome = ['Isabel', 'Lucas', 'Monica']

//console.log(nome[1])
//console.log(nomr[0])

let {0:Isabel, 2:Monica} = nome
console.log(Isabel)
console.log(Monica)

