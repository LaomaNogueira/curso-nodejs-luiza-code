const textoNaoEstruturado = 'Meu CPF é 123.456.569-22';

const regexp = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}') //expressão regular

//retorna match (correspondência) entre uma string e uma expressão regular:
console.log(textoNaoEstruturado.match(regexp)); 

