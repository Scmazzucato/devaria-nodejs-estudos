try{
    const listaDeProdutosDisponiveis = [
        "Pão",
        "Manteiga",
        "Refrigerante",
        "Ovo",
        "Batata",
        "Café",
        "Leite",
        "Frango",
        "Carne",
        "Feijão",
        "Arroz",
        "Macarão"
    ];
    
    const listaDeArgumento = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
        return listaDeArgumento.find(args => args === produto);
    });
    
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nós temos: ${produto}`));
    
    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumento.filter(args =>{
        return !listaDeProdutosDisponiveis.find(produto => produto === args);
    });
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(args => console.log(`Este produto nós não temos: ${args}`));
    
    const listaDeProdutosOrdenados = listaDeProdutosDisponiveis.sort()
    listaDeProdutosOrdenados.forEach(produto => console.log(`Este produto está disponivel ${produto}`));
}catch(e){
    console.log('Não foi possível executar o pedido de compra!')
}
