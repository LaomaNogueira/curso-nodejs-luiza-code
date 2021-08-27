let { readFile, writeFile } = require("fs"); //fs é um módulos do node

readFile("arquivo.txt", "utf8", (error, texto) => { //lê arquivo
    if(error) {
        throw error;

    } else {
        console.log(texto);
    }
})


let novoTexto = "Pense como um boleto, pq ele sempre vence!"

writeFile("arquivo.txt", novoTexto, (error) => {
    if (error) {
        throw error;
    } else {
        console.log("Deu certo a escrita!");
    }
})