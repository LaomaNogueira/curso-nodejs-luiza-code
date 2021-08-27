//no terminal instalar na pasta onde está o arquivo: npm install readline-sync
//e depois chamar node nomeDaPasta pra executar o arquivo 

const rLine = require("readline-sync");

const nome = rLine.question(`Qual é o seu nome: \n`);
console.log(`Olaaaa ${nome}`);