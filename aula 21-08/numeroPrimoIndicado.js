//Imprime qual o xº número primo indicado
//lembrando que: pra ser primo o número tem que ser divisível apenas por 1 e ele mesmo

let qtdadePrimosEncontrados = 0;
let dividendo;
let ehPrimo;
let listaPrimos = [];
let posicaoOrdinal = 10; //xº número primo encontrado

for(dividendo = 2; qtdadePrimosEncontrados < posicaoOrdinal; dividendo++) { //inicia por 2 que é o primeiro n. primo
    ehPrimo = true; //define que o número é primo, até que se prove o contrário

    for(divisor = 2; dividendo > divisor; divisor++) { //divide o dividendo por todos os números entre 1 e ele mesmo (pq pra ser primo só pode ser divisível por 1 e por ele mesmo)
        if(dividendo % divisor == 0) { //se qq dividido der resto = 0, não é primo
            ehPrimo = false;
            break; //encerra esse for e vai pro próx teste
        }
    }

    if(ehPrimo == true) { //se não mudou pra falso, é pq é primo e entra nesse if
        qtdadePrimosEncontrados++; 
        listaPrimos.unshift(dividendo); //adiciona os primos encontrados ao array (unshift - inclui na pos inicial ou push - inclui na posição final)
    }
}

console.log(`Lita de n. primos = ${listaPrimos}`); //imprime o array com os n. primos
console.log(`O ${posicaoOrdinal}º número primo é ${--dividendo}`); //imprime o n. primo na posição ordinal pedida
//-- antes do número, pra incrementar antes da operação
//let soma = a + b++  após a variável - faz a conta e depois incrementa
//let soma1 = a + ++b  antes da variável - incrementa antes e depois faz a conta