//ACEITA esses formatos:
//www.taina.com
//www.taina.com.br
//taina.com

const url = /[?www.]{\w+\}.com.br|.com/

console.log(url.test('www.taina.com'))
console.log(url.test('www.taina.com.br'))
console.log(url.test('taina.com'))
console.log(url.test('www.taina'))
console.log(url.test('www.com'))