class Bomba{
    //CARACTERÍSTICAS:
    constructor(capacidadeBomba, precoCombustivel) {
        this.capacidadeBomba = capacidadeBomba,
        this.precoCombustivel = precoCombustivel,
        this.qtdadeCombustivel = capacidadeBomba
    }

    //MÉTODOS(ações):
    encherBomba() {
        if(this.qtdadeCombustivel == this.capacidadeBomba) {
            console.log("A bomba está cheia!");
        } else {
            this.qtdadeCombustivel = this.capacidadeBomba;
            console.log("Enchendo a bomba......");
        }
    }

    abastecer(qtdadeAbastecida) {
        if(this.qtdadeCombustivel >= qtdadeAbastecida) {
            this.qtdadeCombustivel -= qtdadeAbastecida;
            console.log(`Abastecido! Valor a pagar R$ ${qtdadeAbastecida * this.precoCombustivel}`);
        } else {
            console.log(`A bomba não possui combustível suficiente! Temos ${this.qtdadeCombustivel} litros`);
        }
    }

    ajustarValor(novoValor) {
        if(novoValor > 0  &&  typeof(novoValor) == 'number') {
            this.precoCombustivel = novoValor;
        } else {
            console.log("Valor do combustível inválido!")
        }
    }


}

const bomba1 = new Bomba(50, 5);

bomba1.abastecer(20);

bomba1.ajustarValor(3);

bomba1.abastecer(30);

bomba1.abastecer(10);

bomba1.encherBomba();

