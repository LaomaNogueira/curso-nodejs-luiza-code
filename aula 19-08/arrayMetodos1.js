var name = '       Tainá';

console.log(name.length); //imprime o tamanho da string/array

var frase = 'Essa aula tá muito DOIDA mesmo DOIDA';
console.log(frase.indexOf('muito'));//retorna o índice da ocorrência da string indicada

var doida = frase.slice(19, 24); // slice recorta o que está entre os indices indicados

console.log(doida);

console.log(frase.toUpperCase()); //retorna em MAIÚSCULA

console.log(frase.toLocaleLowerCase()); //retorna em minúscula

console.log(name); 

console.log(name.trim()); //tira os espaços em branco

console.log(frase.split(" ")); // separa em strings tudo que tiver indicado, por exemplo separado por espaços

console.log(frase.lastIndexOf("DOIDA")); //retorna o índice da última ocorrência da string indicadas


