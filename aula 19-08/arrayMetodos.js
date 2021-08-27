//transformar string em number

let text = '10.999999';

let number = parseFloat(text);

console.log(typeof(number));

console.log(parseInt(text));

console.log(number.toFixed(2));

console.log(isNaN(number));
console.log(isNaN(text));
