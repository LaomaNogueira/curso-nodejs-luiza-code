function soma(operadorA, operadorB) { //FUNÇÃO
    var operadorC = operadorA + operadorB;
    return operadorC;
}

function olaGama(nome) {
    console.log('Olá Gama! Você é ' + nome);
}

var resultadoDaSoma = soma(19848, 2); //chama a função
var resultadoNovoDaSoma = soma(1212313, 27);

console.log(resultadoDaSoma, resultadoNovoDaSoma); //imprime a função

olaGama('Laoma');