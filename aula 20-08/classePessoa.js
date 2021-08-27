class Pessoa{
    constructor(nome, idade, cnh) {
        this.nome = nome,
        this.idade = idade,
        this.cnh = cnh
    }

    dirigir() {
        console.log(`O n. da CNH é ${this.cnh}`);
    }

    dormir() {
        console.log(`Sua idade é ${this.idade}`);
    }

    comer() {

    }

}

const pessoa1 = new Pessoa('Laoma', 33, 11234555);
console.log(pessoa1);
console.log(pessoa1.nome);

pessoa1.dirigir();