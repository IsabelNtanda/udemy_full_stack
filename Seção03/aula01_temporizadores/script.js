// setInterval primeira forma de trabalhar com setinterval
/*
function acao(){
document.write('executando... <br>')
}
 var timer= setInterval(acao,1000)
*/

//Segunda forma de trabalhar com setInterval

/* 
setInterval(()=>{
document.write('executando setinterval')
},3000)
*/

function acao(){
console.log('trabalhando com setTimeout')
}
setTimeout(acao, 1000)