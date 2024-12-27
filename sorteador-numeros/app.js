function sortear(){
let quantidade = parseInt(document.getElementById('quantidade').value);
let de = parseInt (document.getElementById('de').value);
let ate = parseInt(document.getElementById('ate').value);
// Validacoes
if (de >= ate) {
    alert("O valor 'Do número' não pode ser maior que o valor 'Até o número'. Por favor, revise os dados.");
    return; // Interrompe a execução da função
}
//pra encerrar o loooop
const intervalo = ate - de + 1;
if (quantidade>intervalo){
    alert (`A quantidade de números não pode ser maior que o intervalo(${intervalo}). Por favor ajuste os valores.`);
    return;// Interrompe a execução da função
}

let sorteados =[];

for (let i = 0; i < quantidade; i ++) {
    numero = obterNumeroAleatorio(de, ate);
   
    while (sorteados.includes(numero)){
      numero = obterNumeroAleatorio(de,ate);
      alert('Tentando obter número inédito');
    }
    sorteados.push(numero);
}

 let resultado = document.getElementById('resultado')
 resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`
alterarStatusBotão();

}

function obterNumeroAleatorio (min,max) {
   return Math.floor(Math.random() * (max - min)) + min;
}

function alterarStatusBotão(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
function reiniciar () {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotão ();
}