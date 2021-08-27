function soma(x, y) {
    return x + y;
}

//inseriu a função em uma constante, ou seja não pode mudar a construção dela durante o código
const multiplicacao = function(x, y) {
    return x * y;
};

//ARROW FUNCTION: mesma coisa de const multiplicacao, mas de forma reduzida:
const dividir = (x, y) => {
    return x / y;
};

const objeto = () => ({ nome: 'Laoma', sobrenome: 'Nogueira' })

//mesma coisa da arrow function pessoa
function pessoa(nome, sobrenome, idade) {
    return {
        'nome': nome, 
        'sobrenome': sobrenome, 
        'idade': idade
    }
}

//ARROW FUNCTION da função pessoa
// const pessoa = (nome, sobrenome, idade) => ({
//     'nome': nome, 
//     'sobrenome': sobrenome, 
//     'idade': idade
// })


console.log(soma(3, 4));
console.log(multiplicacao(3, 4));
console.log(dividir(12, 4));
console.log(objeto);
console.log(pessoa('Laoma', 'Nogueira', 33));
