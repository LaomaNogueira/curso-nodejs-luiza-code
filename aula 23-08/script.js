const rLine = require('readline');//readline recebe dados do usuário

const rl = rLine.createInterface({  //cria uma interface para interagir com o usuário, fluxo de saída e fluxo de entrada
    input:process.stdin, //processo de entrada: resgata o que o usuário digita
    output:process.stdout, //processo de saída
});



let nome = prompt("Informe seu nome:"); // exibe caixa de diálogo pro usuário digitar
console.log(`Seu nome é: ${nome}`);


alert('Ahhhhhhhhhhhhhh!!!!') //exibe uma caixa de diálogo de alerta 