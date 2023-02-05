var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
  event.preventDefault();
  resultado = document.getElementById("resultado");
  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;
  imc = peso / (altura * altura);

  if (imc < 17) {
    resultado.innerHTML =
      "<br> Seu resultado foi:" +
      imc.toFixed(2) +
      "<br> Cuidado vc está muito abaixo do peso";
  } else if (imc > 17 && imc <= 18.49) {
    resultado.innerHTML =
      "<br> Seu resultado foi:" + imc.toFixed(2) + "<br>abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.99) {
    resultado.innerHTML =
      "<br> Seu resultado foi:" + imc.toFixed(2) + "<br> vc está no peso ideal";
  } else if (imc > 25 && imc <= 29.99) {
    resultado.innerHTML =
      "<br> Seu resultado foi:" + imc.toFixed(2) + "<br> vc está acima de peso";
  } else if (imc >= 50) {
    resultado.innerHTML =
      "<br> Seu resultado foi:" + imc.toFixed(2) + "<br> Cuidado obesidade";
  }

  document.getElementById('peso').value = ''
  document.getElementById('altura').value = ''
}
