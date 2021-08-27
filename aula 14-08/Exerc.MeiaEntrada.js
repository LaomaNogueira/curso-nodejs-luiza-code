//idade entre 16 e 18 anos ou maior que 60 anos = meia entrada
//idade entre 19 e 60 anos = inteira

var idade = 30;//colocar a idade

var verifica = 16 >= idade && idade <= 18 || idade > 60 ? 'meia entrada' : 'inteira';

console.log(`${idade} paga ${verifica}`);

