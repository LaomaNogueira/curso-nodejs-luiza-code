let meuNome = 'Laoma';
let meuSobrenome = 'Nogueira';
let minhaProfissao = 'Desenvolvedora JavaScript';

//sem Template string
console.log(
    'Olá, eu sou ' + 
    meuNome + 
    ' ' + 
    meuSobrenome + 
    ' minha profissão é: ' + 
    minhaProfissao
    );

//Template String
console.log(`Olá, eu sou ${meuNome} ${meuSobrenome} minha profissão é: ${minhaProfissao}`);

console.log(`O resultado sa soma de 1 + 1 = ${1 + 1}`);

let meuObjeto = {
    nome: 'Laoma', 
    idade: 33
}

console.log(`O objeto json ${meuObjeto}`);

