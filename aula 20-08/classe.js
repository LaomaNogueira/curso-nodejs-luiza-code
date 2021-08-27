class Livro {
    constructor(nome, editora, paginas) { //método contrutor
        this.nome = nome,
        this.editora = editora,
        this.paginas = paginas
    }
    anunciar() {
        console.log(`Indicando o livro ${this.nome}`);
    }

    exibirQtdDePgs() {
        console.log(`Esse livro tem ${this.paginas} páginas`);
    }
    
}

const livroHP = new Livro('Harry Potter', "Atica", 300);

console.log(livroHP);
livroHP.anunciar();
livroHP.exibirQtdDePgs();

const livro1984 = new Livro('1984', "Atica", 500);
livro1984.anunciar();
livro1984.exibirQtdDePgs();