//MÉTODO EXEC

const target = '22a33b44c';
const pattern = /\d{2}\w/g;
let result = '';

while ((result = pattern.exec(target))) {
  console.log(result);
}

// Quando executamos o método exec, temos um um array e em seguida, esse array 
// é atualizado e transformado em um object com algumas informações. São elas:
// - resultado encontrado Você pode acessar através de: resultado[0];
// - index, ou seja, em qual posição do alvo foi encontrado aquele resultado. Você pode acessar através de: resultado.index;
// - input, ou seja, qual alvo que estava sendo avaliado naquele momento. Você pode acessar através de resultado.input;
// Retorna um array: ['[index] - resultado encontrado', 'index - posição do resultado', 'input - entrada naquele momento']


/palavra/.test('palavras'); // ✅
/palavra/.test('Esta frase contém uma palavra'); // ✅
/palavra/.test('Esta frase não contém'); // ❌