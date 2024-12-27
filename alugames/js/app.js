let quantidadesJogos = 0;
function contarJogos (){
console.log (`A quantidade de Jogos alugados é ${quantidadesJogos}`);

}
//criar funcao para interagir com o codigo
function alterarStatus(id){
    //declarar variáveis que representam as informações recuperadas da página
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    //let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    //exibir na tela após clicar no botão.
    //alert(nomeJogo.textContent); 
//condicionais if/else
if (imagem.classList.contains('dashboard__item__img--rented')) {//trocar a cor da imagem
    imagem.classList.remove ('dashboard__item__img--rented');//trocar a cor da imagem
    botao.classList.remove ('dashboard__item__button--return');//trocar a cor do botao
    botao.textContent = 'Alugar';//trocar a escrita do botao
    alert ('Tem certeza que gostaria de devolver o Jogo?');//alerta sobre devolução
    quantidadesJogos --;//quando for alugar ele estar tirando
}else{
    imagem.classList.add ('dashboard__item__img--rented');//trocar a cor da imagem
    botao.textContent = 'Devolver';//trocar a escrita do botao
    botao.classList.add('dashboard__item__button--return');//trocar a cor do botao
    quantidadesJogos ++;//quando ele for devolver ele esta somando
}
contarJogos();//
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarJogos();
});





