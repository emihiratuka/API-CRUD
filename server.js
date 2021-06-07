//Aqui deixamos apenas configurações mais genéricas do servidor em si.
// aqui será a melhor opção para colocar a nossa conexão com a base de dados e para isso preciso importar o mongoose
const express = require('express'); //importo
const mongoose = require('mongoose');
const app = express(); //instancio
const port= process.env.PORT || 3000; //coloco a porta tento envontrar uma porta padrão e se não encontrar coloco 3000
const path = require("path");
const ProdutoRoutes = require("./routes/produto-routes");



// ao invés de incluir arquivo por arquivo como o feito acima, eu posso apenas indicar o dire´torio utilizando o use do express
app.use(express.static(path.join(__dirname, 'public'))) // vai trazer abrir todos os arquivos que estão dentro da pasta
app.use(express.json()); //essa e a anterior são functions que estão funcionando como uma Middleware  - estão fazenod isso internamente, ou seja, tem o next para continuar
app.use(ProdutoRoutes);

app.listen(port, function() {
    console.log(`Server Running at http://localhost:${port}/`);
});

//CONEXÃO MONGODB LOCALHOST
/*
mongoose.connect('mongodb://localhost:27017/tijolosfc', {userNewUrlParser: true, useUnifieldTopology: true});
*/

//CONEXÂO MONGODB Atlas Cloud


mongoose.connect('mongodb+srv://user_App:2ck6KwKAZujCiTdW@cluster0.af85s.mongodb.net/tijolosfc?retryWrites=true&w=majority',
{userNewUrlParser: true, useUnifieldTopology: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    //we´re connected
    console.log("Conectado");
})