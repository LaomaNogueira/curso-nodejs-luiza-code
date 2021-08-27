var elementos = []; //vetor
var topo = -1; //posição inicial fora da prateleira
const MAX = 10; //tamanho máximo da pilha

function push(num){
    if (topo < MAX){ //acrescenta 1 posição na pilha até chegar em MAX
    topo = topo + 1;
    elementos[topo] = num;
    }
    else{
        console.log("Pilha está cheia");
    }
}

function estaVazia(){
    return topo == -1;
}

function pop(){
    if(topo != -1){
        let num = elementos[topo];
        topo = topo - 1;
        return num;
    }
    else{
        console.log("Pilha está vazia");
    }
}

/*//----------- parte do código que usa a pilha------//
push(10); //coloca elemento na pilha
push(20);
push(30);

console.log(elementos);

console.log(pop());  //tira elemento da pilha
console.log(pop());
console.log(pop());*/

//CÁLCULO DOS NÚMEROS EM BINÁRIO:
var numDecimal = 10;
var resto;

console.log("Empilhando:")
while (numDecimal != 0){
    resto = parseInt(numDecimal % 2); //parceInt = pega apenas o inteiro
    push(resto);
    console.log(resto);
    numDecimal = parseInt(numDecimal / 2);
}

console.log("Desmpilhando:")
while (!estaVazia()){
    console.log(pop()); //NÚMERO EM BINÁRIO
}