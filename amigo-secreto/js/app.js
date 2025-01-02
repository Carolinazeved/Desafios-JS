let amigos = [];//array para guardar pessoas adicionadas/fora da funcao para não ficar reiniciando

function adicionar(){//programar inclusão de amigos
    let amigo = document.getElementById('nome-amigo');//recupera o nome digitado
    if (amigo.value == '') {//nao deixar adicionar nome 
        alert('Insira um nome');//notificação indicando que precisa adicionar nome
        return;//zera ate voce adicionar
    }

    if (amigos.includes(amigo.value)) {//verifica se o nome ja foi adicionado
        alert ('Nome ja adicionado');//notificação de alerta
        return;//zera ate voce corrigir o nome por outro que ainda não esteja na lista
        
    }
    let lista = document.getElementById('lista-amigos');//recupera a lista 

    amigos.push(amigo.value);//adiciona intem no array da linha 01
   //condicional para não substituir o nome e sim adicionar
    if (lista.textContent == '') {
        lista.textContent = amigo.value;//coloca amigo na lista
    }else {//senao ,
        lista.textContent = lista.textContent + ', ' + amigo.value;//coloca virgula e adicionar proximo nome
    }
    
    amigo.value='';//limpa o campo depois de adicionar

}

function sortear(){//funcao der sortear
    if (amigos.length < 4) {//verifica se tem pelo menos 04 pessoas adicionadas antes de sortear
        alert('Adicione pelo menos 04 amigos');//notificação
        return;//impede o sorteio enquanto nao adicionbar 04 pessoas
    }
    embaralha(amigos);//função sortear vai chamar o 'embaralha'
    let sorteio = document.getElementById ('lista-sorteio');//lista que tem o resultado do sorteio

    for(let i = 0; i < amigos.length; i++){//loop que percorre o array inteiro
    
    if (i == amigos.length-1) {//verifica se o i é igual o amigos.length
       sorteio.innerHTML = sorteio.innerHTML+amigos[i] + '-->'+amigos[0]+'<br>'
    } else {
        sorteio.innerHTML = sorteio.innerHTML+amigos[i] + '-->'+amigos[i+1]+'<br>'
    }

    }
}
//Fisher-Yates// função para embaralhar
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {//zera tudo e faz um novo sorteio
    amigos = [];//zera array
    document.getElementById('lista-amigos').innerHTML ='';//zera a lista de amigos incluidos
    document.getElementById ('lista-sorteio').innerHTML = '';//zera o sorteio
    
}