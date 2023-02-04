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
