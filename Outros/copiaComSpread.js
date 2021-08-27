let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
//let arr2 = arr; //os dois ficam com o mesmo valor, NÃO cria cópia
let arr2 = [...arr]; //criar cópia com spread

arr2.push('g');

console.log(`Arr = ${arr}`);
console.log(`Arr2 = ${arr2}`);