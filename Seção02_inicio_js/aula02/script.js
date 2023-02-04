var area = document.getElementById("area");
function entrar() {
  var nome = prompt("Digite o seu nome");
  if (nome === "" || nome === null) {
    alert("Oops algo deu errado");
    area.innerHTML = "Clique no botão pra acessar";
  } else {
    area.innerHTML = " Bem vindo " + nome + "";

    let botaoSair = document.createElement("button");
    botaoSair.innerHTML = "Sair da conta";
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);
  }
}
function sair() {
  alert("até mais");
  area.innerHTML = "vc saiu";
}
function mediaAluno(nota1, not2) {
  var media = (nota1 + not2) / 2;
  if (media >= 10) {
   console.log("aluno aprovado");
  } else {
    console.log("aluno reprovado");
  }
}

function aluno(nome, curso){
var msg = ' seja bem vindo ' + nome + ' ao curso d e' + curso;
console.log(msg)
}