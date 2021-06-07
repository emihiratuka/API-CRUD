//no domian defino o nosso objeto
class Produto{

    constructor(idProduto, categoriaProduto, nomeProduto, descricaoProduto, precoProduto, ativoProduto, imagemProduto, dataCadastroProduto) {
        this.idProduto = idProduto;
        this.categoriaProduto = categoriaProduto;
        this.nomeProduto = nomeProduto;
        this.descricaoProduto = descricaoProduto;
        this.precoProduto = precoProduto;
        this.ativoProduto = ativoProduto;
        this.imagemProduto = imagemProduto;
        this.dataCadastroProduto = dataCadastroProduto;
    }
    
}
module.exports = Produto; //para permitir a importação da classe produto
