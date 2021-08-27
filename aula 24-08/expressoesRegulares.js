const exp = require("constants");

var expressao = new RegExp('aula');
var expressao1 = /aula/;
console.log(expressao.test('A aula está ótima hoje!')); //verifica se o contem o padrao
console.log(expressao1.test('O dia está ótimo hoje!'));


const numeros = /[0125789]/
const numeros1 = /[0-8]/ //intervalo


console.log(numeros.test('1')); //verifica se contem pelo menos um no padrao
console.log(numeros.test('6'));
console.log(numeros.test('9'));
console.log(numeros.test('4gjhkh9')); //verifica se contem pelo menos um no padrao e retorna true ou false

console.log(numeros1.test('6'));
console.log(numeros1.test('9'));

const digitos = /\d/ //verifica se existe algum dígito 0-9
const mais = /\d+/ //após a expressão esse elemento pode se repetir mais de uma vez
const naoDigitos = /\D/ //verifica se tem pelo menos algum valor que não seja dígito

console.log(digitos.test('6'));
console.log(digitos.test('aasdc'));

console.log(naoDigitos.test('aa67sdc'));
console.log(naoDigitos.test('5677'));

const espaco = /\s/
const temAlfanumerico = /\w/  //precisa algum caracter que seja alfanumérico, espaço não é alfanumérico
const notAlfanumerico = /\W/ //precisa de algum caracter que não seja alfanumérico

const not = /[^aula]/ //NOT - aceito tudo menos o que está descrito
console.log(not.test('aula'));
console.log(not.test('aula 2'));

const question = /gat?o/ //diz que os dígitos anteriores a interrogação são opcionais e os posteriores são obrigatórios
console.log(question.test('gato'))
console.log(question.test('gao'))
console.log(question.test('ga'))

const expressao2 = /\d{5}-\d{3}/; //exige: 5 dígitos traço 3 dígitos
console.log(expressao2.test("34567-276"))
console.log(expressao2.test("345-27"))

const nome4 = /\w+ (Taina|Laoma|Laura)/; //método OU

console.log(nome4.test("Eu sou a Laoma"));
console.log(nome4.test("Eu sou a Fernanda"));

console.log(("123 existe").match(/\d+/)); //MÉTODO match