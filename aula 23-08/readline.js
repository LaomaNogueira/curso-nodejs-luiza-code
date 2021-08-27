const rLine = require('readline');//readline recebe dados do usuário sem necessidade de HTML

const rl = rLine.createInterface({  //cria uma interface para interagir com o usuário, fluxo de saída e fluxo de entrada
    input:process.stdin, //processo de entrada: resgata o que o usuário digita
    output:process.stdout, //processo de saída
});

//chamadas de eventos existentes no readline
rl.question(`Qual é o seu nome?`, (nome) => { //exibe uma consulta e grava uma saída
    console.log(`Olá ${nome}`);
    rl.close(); //encerra a instância
})

rl.on('close', () => {
    console.log(`Volte sempre!!!`)
})