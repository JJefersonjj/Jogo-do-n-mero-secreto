let listaDeNumerosSorteados = [];
let NumeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.0});
}
    function exibirMensagemInicial() {
        exibirTextoNaTela ('h1', 'Jogo do número secreto');
        exibirTextoNaTela ('p', 'Escolha um número secreto entre 1 e 10');
        
    }

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemsTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemsTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {
       if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++
        limparCampmo();
    }
}

    function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() * NumeroLimite + 1);
        let quantidadesDeElementosNaLista = listaDeNumerosSorteados

        if (quantidadesDeElementosNaLista == NumeroLimite){
            listaDeNumerosSorteados= []
        }

        if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio();
        }
        else{
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados);
            return numeroEscolhido;
        }
       
    }
    function limparCampmo(){
        chute = document.querySelector('input');
        chute.value = '';
    }

    function reniciarJogo(){
        numeroSecreto = gerarNumeroAleatorio();
        limparCampmo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disable', true);
    }
