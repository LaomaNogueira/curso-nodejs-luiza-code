let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(lista);

let tamanho = lista.length-1;
let aux;

for (i = 0; i < lista.length/2; i++) {
    aux = lista[i];
    lista[i] = lista[tamanho];
    lista[tamanho] = aux;
    tamanho--;
}

console.log(lista);

let lista1 = [11, 21, 33, 4, 45, 6, 47, 8, 9, 10];
console.log(lista1);

lista1.reverse();
console.log(lista1);

let palavra = 'palavra';
console.log(palavra.split(''));
