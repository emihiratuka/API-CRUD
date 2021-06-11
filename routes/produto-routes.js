//è o mesmo que o Controller - é a paerte que conversa com o HTTP com o front
//CRUD - Create, Retrieve, Update, Delete

const express = require('express');
var router = express.Router(); //estou extraindo de dentro do express o Router
const ProdutoController = require('../controllers/produto-controller')

//criando uma classe, transformando a rota em um objeto:
class ProdutoRoutes{
    constructor() { //o que eu devo colocar como propriedades do meu objeto, o que os chamadores poderão alterar.
        this.produtoController = new ProdutoController(); //transformei a minha constante em uma propriedade.
        this.router = express.Router();
        this.loadRoutes();
    }


    //aqui eu coloco o método carregador de rotas, apenas para ficar mais organizado, dividido as responsabilidades, então no constructor eu inicializo as propriedades
    loadRoutes() {
        this.router.get("/produto", this.produtoController.buscarTodos.bind(this.produtoController)); //aqui eu estou informando qual o this que deve ser utilizado para não pegar qualquer this.

        this.router.post("/produto", this.produtoController.adicionar.bind(this.produtoController)); 

        this.router.put("/produto", this.produtoController.alterar.bind(this.produtoController));

        this.router.delete("/produto", this.produtoController.excluir.bind(this.produtoController)); //eu tive que colocar o this porque virou propriedade agora.
    }
}

module.exports = new ProdutoRoutes().router; //porque eu estou fazendo isso, é apeans uma sugestão. Já estou entregando instanciado e estou mandando a propriedade que ele vai precisar la na outra ponta.