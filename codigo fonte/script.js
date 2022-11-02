var numeroSecreto = parseInt(Math.random() * 11);

function chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var resultado = document.getElementById("resultado");

  if (chute == numeroSecreto) {
    resultado.innerHTML = "vc acertou";
  } else if (chute < numeroSecreto) {
    resultado.innerHTML = "vc errou, o valor é maior";
  } else if (chute > numeroSecreto) {
    resultado.innerHTML = "vc errou, o valor é menor";
  }
  if (chute < 0 || chute > 10) {
    resultado.innerHTML = "numero não permitido, digite um numero de 0 a 10";
  }
}
