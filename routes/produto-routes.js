//è o mesmo que o Controller - é a paerte que conversa com o HTTP com o front
//CRUD - Create, Retrieve, Update, Delete

const express = require('express');
var router = express.Router(); //estou extraindo de dentro do express o Router
const Produto = require("../domain/produto-domain"); //representa o nosso modelo
const ProdutoService = require('../services/produto-service'); //representa o nosso service, regra de negócio
const ProdutoController = require('../controllers/produto-controller')

//Como estava antes:
/*
router.get("/produto", async (req, res)=> {  //troquei o app.get por router.get
    const produtos = await produtoService.buscarTodos(); //retornou uma promise e preciso saver extrair os meus dados de dentro da promise - incluí o await para tornar essa chamada mais síncrona, podeira implementar o jeito padrão de extrair os dados que seria:
    /*const produtos = produtoService.buscarTodos();
    produtos.then{(d)=>} - mas podemos evitar esse tehn e utilizar o await para tornar mais síncrono. Para que o await funcione, eu preciso tornar a função async (a função é o (req, res) => {})
    */
   /*
    console.log(produtos);
    res.json(produtos);
});
*/
const produtoController = new ProdutoController();
/*
router.get("/produto", (req,res)=> {produtoController.buscarTodos(req, res)} ); 
*/
//Outra forma de chamar o buscar todos, como a função bucarTodos(req,res) tem a mesma estrutura que a função (req,res), eu posso passar direto a referência sem chamá-la, não preciso chamar a função. Não estou invocando a minha função, estou passando a referência
router.get("/produto", produtoController.buscarTodos.bind(produtoController)); //aqui eu estou informando qual o this que deve ser utilizado para não pegar qualquer this.

produtoService = new ProdutoService();
router.post("/produto", (req, res)=> {
    let produto = new Produto(req.body.idProduto, req.body.categoriaProduto, req.body.nomeProduto, req.body.descricaoProduto, req.body.precoProduto, req.body.ativoProduto, req.body.imagemProduto, req.requestTime); //para que o nodejs entenda o body do json preciso inicializar antes com o comando app.use(express.json())
    produtoService.adicionar(produto);

    //res.send('chamou pelo meu método Post' + produto);
    //se eu quiser mostrar a mensagem como json:
    res.json(produto);
    
}); 
// quando eu coloco (req,res)=>{} é o memso que function(req, res){} e chamamos de arrow

router.put("/produto", (req, res)=> {
    produtoService.alterar(req.body);
    res.send("Alterado com sucesso");
});

router.delete("/produto", (req, res)=> {
    produtoService.excluir(req.body.idProduto);
    res.send('Excluído com sucesso');

});

module.exports = router;