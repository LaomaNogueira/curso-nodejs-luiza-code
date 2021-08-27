let lista = [3, 5, 20];
let listaIncluir = [2, 4, 6, 8, 10];

//sem spread:
//let unirListas = lista.concat(listaIncluir); //igual a: [].concat(lista, listaIncluir);

//união com spread (...):
let unirListas = [...lista, ...listaIncluir];

console.log(`Antes de entrar da ordenação ${unirListas}`);

function ordena(){
    let inicio = 0;
    let tmp;

    for (i = 0; i < unirListas.length; i++){
        for (pos = inicio; pos <= unirListas.length - 1 - i; pos++) { //pos = posição
            if (unirListas[pos] > unirListas[pos + 1]) {
                tmp = unirListas[pos];
                unirListas[pos] = unirListas[pos + 1];
                unirListas[pos + 1] = tmp;
            }
        }
    }
}

ordena();
console.log(`Array ordenado: ${unirListas}`);