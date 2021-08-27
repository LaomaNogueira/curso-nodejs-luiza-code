class matematica {
    soma(valorA, valorB) {     //declara função, não precisa da palavra reservada function
        return valorA + valorB;
    }
    subtracao(valorA, valorB) {                
        return valorA - valorB;
    }
    multiplicacao(valorA, valorB) {                
        return valorA * valorB;
    }
    divisao(valorA, valorB) {                
        return valorA / valorB;
    }
    resto(valorA, valorB) {                
        return valorA % valorB;
    }
}

var instanciaMatematica = new matematica();  //instancia da classe, criando um objeto em memória

console.log(instanciaMatematica.soma (4, 7)); //exibe os resultados
console.log(instanciaMatematica.subtracao (4, 7));
console.log(instanciaMatematica.multiplicacao (4, 7));
console.log(instanciaMatematica.divisao (7, 4));
console.log(instanciaMatematica.resto (7, 4));
