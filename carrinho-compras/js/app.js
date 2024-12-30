let totalGeral;//inicializa a variavel totalGeral corretamente
limpar();//Chama a função limpar para resetaros valores

function adicionar() {
   //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value; 
    
    //verificar se o produto selecionado é valido
    if(!produto|| produto.trim() ==="") {
      alert("Selecione um produto válido.");
      return;
    }
    //verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0)
      {
      alert ("Insira uma quantidade válida.");
      return;
    }
    let nomeProduto = produto.split('-')[0].trim();
    let valorUnitario = parseFloat(produto.split('R$')[1].trim());
    let preco = quantidade * valorUnitario;//calcular o preço, o nosso subtotal
    
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;
   
  //atualizar o valor total
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total'); 
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;
    document.get.ElementById('quantidade').value = '';
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
