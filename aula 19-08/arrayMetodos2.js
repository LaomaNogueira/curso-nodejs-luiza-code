var pizza = ['frango', 'carne', 'vegana'];
var number = [1, 2, 3, 4, 5];
var number1 = [11, 22, 32, 42, 25];

console.log(pizza.length);

number.push(123); //põe elemento no final do array
console.log(number);

number.pop(); //tira elemento no final do array
console.log(number);

number.unshift(); //põe elemento no começo do array
console.log(number);

number.shift(); //tira o elemento do começo do array
console.log(number);

//splice primeiro: indice escolhido
//       segundo:  número de elementos a serem removidos a partir do indice 
//       terceiro: insere nesse indice
number.splice(2, 0, 'Laoma');
console.log(number);

number.splice(2, 1);
console.log(number);

console.log(number.indexOf(33)); //retorna 1 se tiver o elemento no array e -1 se não tiver

console.log(number.join(' - ')); //pega cada elemento e une em uma string, separado pelo que colocarmos no ()
console.log(number.join('')); //('')assim une sem separações, se deixar vazio() coloca entre vírgulas

console.log(number1.toString()); //pega cada elemento e une em uma string, com vírgula

console.log(number.reverse()); //inverte o array

console.log(pizza[2]); //acessa o índice escolhido
