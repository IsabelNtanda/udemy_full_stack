//usando spread operator com array

let primeiros = [1,2,3]

let numeros = [...primeiros,4,5,0]

console.log(numeros)

//usando spread operator com objecto

let pessoa = {
nome:'Isabel',
idade: 24,
cargo:'RH'
}

let novaPessoa = {
...pessoa,
status:'ativo',
cidade:'Luanda',
telefone:936270569
}

console.log(novaPessoa)

//trabalhando com funcao usando spread operator

function novoUsuario(info){
 let dados = {
...info,
status:'Ativo',
inicio:'20/01/2023',
codigo:'12255'
};
console.log(dados)
}

novoUsuario({nome:'Isabel',sobrenome:'Pereira', cargo:'dev'})
