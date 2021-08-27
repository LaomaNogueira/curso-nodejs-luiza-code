const rLine = require("readline-sync");

class Calculadora { //classe com as opções da calculadora
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    somar() {
        return (this.valor1 + this.valor2);
    }

    subtrair() {
        return (this.valor1 - this.valor2);
    }

    multiplicar() {
        return (this.valor1 * this.valor2);
    }

    dividir() {
        return (this.valor1 / this.valor2);
    }

}

console.log( //menu de opções apenas no inicio
    'Digite uma opção do menu para realizar a operação:\n' +
    '(1) Somar\n' +
    '(2) Subtrair\n' +
    '(3) Multiplicar\n' +
    '(4) Dividir\n' +
    '(5) Encerrar Calculadora'
);

let operacao;

while((operacao = rLine.questionInt('Operacao: ')) != 5) { //enquanto a operação recebida for diferente de 5...
   
    if(operacao > 0 && operacao < 5) { //pq se o switch case cair no default, não solicita os valores
        let valorRecebido1 = rLine.questionFloat(`Digite N1: \n`);
        let valorRecebido2 = rLine.questionFloat(`Digite N2: \n`);

        var calculadora1 = new Calculadora(valorRecebido1, valorRecebido2);
    }

    switch (operacao) {
        case 1:
            console.log(calculadora1.somar());
            break;

        case 2:
            console.log(calculadora1.subtrair());
            break;

        case 3:
            console.log(calculadora1.multiplicar());
            break;

        case 4:
            console.log(calculadora1.dividir());
            break;

        default:
            console.log( //menu de opções se digitar uma opção inválida
            'Digite uma opção válida!\n' +
            '(1) Somar\n' +
            '(2) Subtrair\n' +
            '(3) Multiplicar\n' +
            '(4) Dividir\n' +
            '(5) Encerrar Calculadora'
            );
            break;

    }

}

if(operacao == 5) { //encerra a calculadora
    console.log('Calculadora encerrada!');
}