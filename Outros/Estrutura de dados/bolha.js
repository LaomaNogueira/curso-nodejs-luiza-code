var valores = [10, 9, 8, 45, 7, 6, 11, 5, 4, 3, 23, 2, 1];

function ordena(){
    let inicio = 0;
    let fim = 13;
    let tmp;

    for (vezes = 0; vezes < 13; vezes++){
        for (pos = inicio; pos < fim - 1 - vezes; pos++) { //pos = posição
            if (valores[pos] > valores[pos + 1]) {
                tmp = valores[pos];
                valores[pos] = valores[pos + 1];
                valores[pos + 1] = tmp;
            }
        }
    }
}

ordena();
console.log("Vetor ordenado...");
console.log(valores);