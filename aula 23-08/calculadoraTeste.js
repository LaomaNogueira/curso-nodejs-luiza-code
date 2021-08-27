const rLine = require("readline-sync");

class Calculadora {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    somar() {
        return this.valor1 + this.valor2;
    }

    subtrair() {
        return this.valor1 - this.valor2;
    }

    multiplicar() {
        return this.valor1 * this.valor2;
    }

    dividir() {
        return this.valor1 / this.valor2;
    }

}

console.log(
    `Digite uma opção do menu para realizar a operação:
    1. Somar
    2. Subtrair
    3. Multiplicar
    4. Dividir
    5. Encerrar Calculadora`
);

do {
    let operacao = rLine.questionInt('');

    if(operacao === '5') {
        console.log('Calculadora encerrada!');
        break;
    }

    let valorRecebido1 = rLine.questionFloat(`Digite N1: \n`);
    let valorRecebido2 = rLine.questionFloat(`Digite N2: \n`);

    const calculadora1 = new Calculadora(valorRecebido1, valorRecebido2);

    console.log(calculadora1);
    console.log(operacao);

    switch (operacao) {
        case '1':
            calculadora1.somar;
            break;

        case '2':
            calculadora1.subtrair;
            break;

        case '3':
            calculadora1.multiplicar;
            break;

        case '4':
            calculadora1.dividir;
            break;

        default:
            console.log('Digite uma opção válida! Valores inteiros entre 1 e 5.');
            break;
    }
} while (operacao =! '5');