let express = require('../../../node_modules/express'); //módulo express do node
let app = express();

//configuração:
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//simula banco de dados :
var bancoDeDados = { //variáver objeto
    produtos: [ //array de produtos
        { 
            id: 1,
            nome: "Chocolate",
            categoria: "Alimentos",
            preco: 2.00
        },
        { 
            id: 2,
            nome: "sorvete",
            categoria: "Alimentos",
            preco: 2.00
        },
        { 
            id: 3,
            nome: "Notebook",
            categoria: "Eletrônicos",
            preco: 2000.00
        },
        { 
            id: 4,
            nome: "Celular",
            categoria: "Eletrônicos",
            preco: 2.00
        },
    ]

}

//listen, get... métodos do express
app.listen(3000, function() { //numero da porta que disponibiliza a api
    console.log("Iniciando servidor....")
})

app.get("/produtos", (req, res) => { //get retorna dados em json
    res.statusCode = 200;
    res.json(bancoDeDados); //quando usuário bater na URL, a api retorna o banco de dados
})

//:id retorna o valor de id
app.get("/produtos/:id", (req, res) => {
    if(isNaN(req.params.id)) { //se o parâmetro id passado na requisição não for número(isNaN)
        //res.statusCode = 400; // atribui o status de erro bad request
        res.sendStatus(400); //mesma coisa de cima
    } else {
        var id = parseInt(req.params.id); //transforma o id recebido em um inteiro
        var produto = bancoDeDados.produtos.find(prod => prod.id == id); //verifica se o produto.id do banco é igual ao informado
        //prod => prod.id == id ... funciona como um for...

        if(produto == undefined) {
            res.sendStatus(404); // resposta não encontrado
        } else {
            res.json(produto);
            res.sendStatus(200); //status code é sucesso
        }
    }
    res.statusCode = 200;
    res.json(bancoDeDados); //quando usuário bater na URL, a api retorna o banco de dados
})




/*
app.get('/', function(requisicao, resposta) {//rota do tipo get, para acessar 
    resposta.send("Aeee Aee e e e o o o");
});

app.listen(3000, function() { //numero da porta
    console.log("Iniciando servidor....")
})
*/

//no navegadorescrever: localhost: 3000 .... onde 3000 é o n. da porta e pode ser alterado