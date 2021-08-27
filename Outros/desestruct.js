const pessoa = {
    nome: 'Laoma',
    sobrenome: 'Nogueira',
    idade: 33,
    profissao: 'Deva'
}

console.log(pessoa);


//quebrando com desestruct:
let { nome, sobrenome, idade, profissao } = pessoa;

console.log(nome, sobrenome, idade, profissao);

//quebrando em variáveis separadas sem desestruct:
// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let profissao = pessoa.profissao;





