class ProdutoRepoArray{

    constructor(){
        this.produtos = []; //criei um array - vou substituir 
    }

    //vou criar os métodos do CRUD

    adicionar(produto){
        this.produtos.push(produto);
    }

    excluir(idProduto){
        //preciso primeiro localizar dentro do array
        // posso fazer de várias formas, posso usar o splice -> array.splice();
        let i = this.produtos.findIndex((o)=>o.idProduto==idProduto);
        this.produtos.splice(i,1);
    }

    alterar(produto){
        this.produtos.forEach( (o) => { //(o) é o objeto da vez, então para cada objeto verifico se o diProduto = idPrdouto
            if (o.idProduto == produto.idProduto){
                o.categoriaProduto = produto.categoriaProduto ? produto.categoriaProduto: o.categoriaProduto; //se tiver valor eu substituo, mas não tiver, mantenho o original
                o.nomeProduto = produto.nomeProduto ? produto.nomeProduto: o.nomeProduto;
                o.descricaoProduto = produto.descricaoProduto ? produto.descricaoProduto: o.descricaoProduto;
                o.precoProduto = produto.precoProduto ? produto.precoProduto: o.precoProduto;
                o.ativoProduto = produto.ativoProduto ? produto.ativoProduto: o.ativoProduto;
                o.imagemProduto = produto.imagemProduto ? produto.imagemProduto: o.imagemProduto;
            }

        });

    }

    buscar(idProduto){

    }

    buscarTodos(){
        return this.produtos;
    }
}

module.exports = ProdutoRepoArray;
