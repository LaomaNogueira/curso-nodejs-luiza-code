/*TABUADA COM FOR
var tabuada = 10;
for (var i = 0; i <= 10; i++) { //utilizar esta variável apenas neste bloco de código
    console.log("Valor de " + tabuada + " x " + i + " = " + (tabuada * i));
}*/

/*
var numeroSorteado = 10;
for (var j = 0; j < 100; j++) {
    if (numeroSorteado === j) {
        console.log("seu número foi encontrado");
        break; //parada súbita não é recomendado
    }
}*/

/*WHILE*/
var numeroSorteado = 10;
var achou = false;
var possivelValor = 0;

while (!achou) {
    possivelValor += 1;
    if (numeroSorteado === possivelValor) {
        achou = true;
    } else {
        console.log(
            'Possível valor nao corresponde ao n. sorteado' + possivelValor
        );
    }
}