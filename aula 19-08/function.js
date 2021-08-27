function parOuImpar(number) {
    // if(number % 2 == 0) {
    //     console.log(`${number} é par`);
    // } else {
    //     console.log(`${number} é ímpar`);
    // }

    return(number % 2) == 0 ? `par` : `ímpar`
}

var number = 10;
console.log(`${number} é ${parOuImpar(number)}`);



const livro = function (nome, editora, paginas){
    this.nome = nome,
    this.editora = editora,
    this.paginas = paginas

    this.anunciar = function() {
        console.log(`O livro ${this.nome} tá a venda!`);
    }
}

const livroHP = new livro('Harry Potter', "Atica", 300);

console.log(livroHP);

livroHP.anunciar();




