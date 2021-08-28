let { readFile } = require('fs')


function modificaUsuario(nome, idade, profisso) {
    readFile("arquivo.json", "utf8", (error, texto) =>{

        if(error) {
            throw error;
        } else {
            //parse é o método json: converte o objeto json pra JS
            var conteudo = JSON.parse(texto); 
            console.log(conteudo);
            
            conteudo.nome = nome;
            conteudo.idade = idade;
            conteudo.profissao = profisso;

            writeFile("arquivo.json", JSON.stringify(conteudo), (error) => {
                if(error) {
                    throw error;
                }else {
                    console.log("alterado com sucesso");
                }
            })

        }
    })
}

//programa principal:
modificaUsuario()