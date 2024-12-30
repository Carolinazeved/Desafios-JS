function comprar() {//recuperar as informaçõpes do formulario
 let tipo = document.getElementById('tipo-ingresso');
 let qtd = parseInt(document.getElementById('qtd').value);//parseint para retornar como numero inteiro
   
 if (tipo.value == 'pista') {//condicional para comprar pista
      comprarPista(qtd);
  }else if (tipo.value == 'superior') {//condicional para comprar superior
    comprarSuperior(qtd);
  }else {//condicional para comprar inferior
    comprarInferior(qtd);
  }
}

function comprarPista(qtd) {//função para comprar pista
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);//recuperar a quantidade 
    if(qtd > qtdPista){//condicionais
        alert('Quantidade indisponivel');//quando a quantidade é maior do que o disponivel
    } else {
        qtdPista = qtdPista - qtd;//diminuir do total que tem para o que é comprado
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');   
    }
}
//comprar superior
function comprarSuperior(qtd) {//função para comprar superior
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);//recuperar a quantidade 
    if(qtd > qtdSuperior){//condicionais
        alert('Quantidade indisponivel');//quando a quantidade é maior do que o disponivel
    } else {
        qtdSuperior = qtdSuperior - qtd;//diminuir do total que tem para o que é comprado
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');   
    }
}
//comprar inferior
function comprarInferior(qtd) {//função para comprar Inferior
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);//recuperar a quantidade 
    if(qtd > qtdInferior){//condicionais
        alert('Quantidade indisponivel');//quando a quantidade é maior do que o disponivel
    } else {
        qtdInferior = qtdInferior - qtd;//diminuir do total que tem para o que é comprado
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');   
    }
}
