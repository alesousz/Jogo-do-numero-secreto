let listaDeNumerosSorteados = [];
let numeroMaximo = 100;
let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 1;

console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female");
}

exibirTextoNaTela("h1", "Jogo do numero Secreto");
exibirTextoNaTela("p", `Escolha um numero entre 1 e ${numeroMaximo}`);

function verificarChute() {
  const inputNumeroDoChute = document.querySelector("input").value;
  console.log(inputNumeroDoChute);
  console.log(tentativas);

  if (inputNumeroDoChute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    exibirTextoNaTela(
      "p",
      `Você descobriu o ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
    );
    //codigo para habilitar o botao de novo jogo quando o usuario acertar o numero
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (inputNumeroDoChute > numeroSecreto) {
      exibirTextoNaTela(
        "p",
        `O numero Secreto é menor que ${inputNumeroDoChute}`
      );
    } else {
      exibirTextoNaTela(
        "p",
        `O numero Secreto é maior que ${inputNumeroDoChute}`
      );
    }
    tentativas = tentativas + 1;
    limparCampo();
  }
}

function limparCampo() {
  inputNumeroDoChute = document.querySelector("input");
  inputNumeroDoChute.value = "";
}

//pra palavra ficar no singular
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

//essa função retira o numero gerado tbm, dar uma olhada melhor
function gerarUmNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == numeroMaximo) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarUmNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function novoJogo() {
  numeroSecreto = gerarUmNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do numero Secreto");
  exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
}
