const rLine = require("readline-sync");

//module exports:
const chamandoSoma = require('./calculadoraModuleExports/soma');
const chamandoSub = require('./calculadoraModuleExports/subtracao');
const chamandoMult = require('./calculadoraModuleExports/multiplicacao');
const chamandoDiv = require('./calculadoraModuleExports/divisao');


let operacao, valorRecebido1, valorRecebido2;


do {
    operacao = rLine.questionInt(
        'Digite uma opção do menu para realizar a operação:\n' +
        '(1) Somar\n' +
        '(2) Subtrair\n' +
        '(3) Multiplicar\n' +
        '(4) Dividir\n' +
        '(5) Encerrar Calculadora\n'
    );

    if(operacao > 0 && operacao < 5) { //pq se o switch case cair no default, não solicita os valores
        valorRecebido1 = rLine.questionFloat(`Digite N1: \n`);
        valorRecebido2 = rLine.questionFloat(`Digite N2: \n`);
    }

    switch (operacao) {
        case 1:
            console.log(chamandoSoma(valorRecebido1, valorRecebido2));
            break;

        case 2:
            console.log(chamandoSub(valorRecebido1, valorRecebido2));
            break;

        case 3:
            console.log(chamandoMult(valorRecebido1, valorRecebido2));
            break;

        case 4:
            console.log(chamandoDiv(valorRecebido1, valorRecebido2));
            break;

        default:
            console.log('Opção Inválida!!!');
            break;

    }
}while(operacao != 5)

if(operacao == 5) { //encerra a calculadora
    console.log('Calculadora encerrada!');
}


/*
let operacao;

while((operacao = rLine.questionInt('Operacao: ')) != 5) { //enquanto a operação recebida for diferente de 5...
   
    if(operacao > 0 && operacao < 5) { //pq se o switch case cair no default, não solicita os valores
        let valorRecebido1 = rLine.questionFloat(`Digite N1: \n`);
        let valorRecebido2 = rLine.questionFloat(`Digite N2: \n`);

        var calculadora1 = new Calculadora(valorRecebido1, valorRecebido2);
    }

    

}

if(operacao == 5) { //encerra a calculadora
    console.log('Calculadora encerrada!');
}*/