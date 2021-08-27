/*
Recebe lista com nomes
Usuário escolhe 1 nome da lista
Programa exclui o nome da lista e imprime os 4 nomes que restaram na lista*/

function listagem(lista) {
    for (var i = 1; i <= lista.length; i++) {
        console.log(`${i}. ${lista[i-1]}`);
    }
}

let nomes = ['Laoma', 'Manu', 'Ceci', 'Gabe', 'Merlin'];
console.log(`Qual dos nomes abaixo você deseja excluir?`);
listagem(nomes);



let opcaoUsuario = 1;
console.log(`Opção: ${opcaoUsuario}`);

nomes.splice(opcaoUsuario-1, 1); //índice que deseja remover e qtdade de obj que deseja excluir

console.log(`Lista após a exclusão:`);
listagem(nomes);

// let nomes1 = ['Rato', 'Cachorro', 'Gato', 'Esquilo', 'Formiga'];
// console.log(`Qual dos nomes abaixo você deseja excluir?`);
// listagem(nomes1);
