const ProdutoService = require('../services/produto-service'); //representa o nosso service, regra de negócio

class ProdutoController{
    
    constructor(){
        this.produtoService = new ProdutoService(); //coloquei aqui como propriedade. Ao instaciar o ProdutoController eu defino uma propriedade produtoService e passo a instancia dele: new ProdutoService()

    }


    adicionar(produto){

    }

    excluir(idProduto){

    }

    alterar(produto){

    }

    async buscarTodos(req, res){  
        const produtos = await this.produtoService.buscarTodos(); //preciso colocar this.produtoService porque é uma propriedade, mas esse this pode dar conflito, pois ele varia de acordo com o escopo. Quando um método get chama essa função ele pode entender que esse this é de quem chamou e não é do produtoController. Para que não ocorra essa confusão e dê erro "Cannot read property 'produtoService' of undefined, quando chamo a função, preciso passar de que this se trata especificamente que no caso é do produtoController"
        //Se eu não utilizar o this e eu criar uma instancia com new produtoService.buscarTodos(), eu não preciso na chamada da função colocar o bind(this), pois não haverá confusão com a referência.
            
        console.log(produtos);
        res.json(produtos);
        
    }
}

module.exports = ProdutoController;