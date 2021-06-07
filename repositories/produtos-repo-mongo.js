//repositorio MONGODB
const mongoose = require('mongoose');
const Produto = require('../domain/produto-domain');
const ProdutoModel = require('../models/produto-model');


class ProdutoRepositoryMongo{

    constructor(){
        this.model = ProdutoModel; //posso colocar this.model ou this.collection - produtoModel é uma classe que o próprio mongoose
        //criou e já tem vários metodos

        //eu poderia nem colocar ele aqui e poderia utilizar direto o ProdutoModel
    }

    //vou criar os métodos do CRUD

    adicionar(produto){
        this.model.create(produto, function (err, suc) {
            if (err) return handleError(err);
            console.log("Produto Salvo com Sucesso");
        }); //isso nada mais é que ProdutoModel.create

    }

    excluir(idProduto){
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
       /* return this.model.find({}); não posso retornar diretamente o this.model.find(0 porque é uma query)*/
       const query = this.model.find({}); //primeiro eu guardo a query em uma constante
       const promise = query.lean().exec(); // executo a query e guardo em uma promise - eu posso usar com o sem o lean, sem o lean além dos campos, vai trazer mais um monte de propriedades que pode não me interessar.
       return promise; //retorno a promise que é uma json
    }
}

module.exports = ProdutoRepositoryMongo;
