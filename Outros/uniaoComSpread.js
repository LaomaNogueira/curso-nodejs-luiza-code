let lista = [1, 2, 5];
let listaIncluir = [3, 4];

//sem spread:
console.log(lista);
console.log(listaIncluir);

// for (let i = 0; i < listaIncluir.length; i++){
//     for (let j = 0; j < lista.length; j++){
//         if(lista[j] >= listaIncluir[i]) { //compara o valor contido nos índices
//             lista.splice(j, 0, listaIncluir[i]); //função que insere valores em posição estratégica
//             j++;
//         }
//     }
// }

// console.log(lista);


//com spread (pega valores de uma lista e se adapta onde está sendo incluído):
const listResult = [1, 2, ...listaIncluir, 5];

console.log(listResult);


