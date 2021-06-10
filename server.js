//Aqui deixamos apenas configurações mais genéricas do servidor em si.
// aqui será a melhor opção para colocar a nossa conexão com a base de dados e para isso preciso importar o mongoose
const express = require('express'); //importo
const app = express(); //instancio
const port= process.env.PORT || 3000; //coloco a porta tento envontrar uma porta padrão e se não encontrar coloco 3000
const path = require("path");
const ProdutoRoutes = require("./routes/produto-routes");
const ManageDB = require("./db/ManageDB");

//Conexão, como é um método estático, posso chamar diretamente,não preciso instaciá-lo
ManageDB.connect();
//ManageDB.close(); coloquei apenas para testar.



// ao invés de incluir arquivo por arquivo como o feito acima, eu posso apenas indicar o dire´torio utilizando o use do express
app.use(express.static(path.join(__dirname, 'public'))) // vai trazer abrir todos os arquivos que estão dentro da pasta
app.use(express.json()); //essa e a anterior são functions que estão funcionando como uma Middleware  - estão fazenod isso internamente, ou seja, tem o next para continuar
app.use(ProdutoRoutes);

app.listen(port, function() {
    console.log(`Server Running at http://localhost:${port}/`);
});
