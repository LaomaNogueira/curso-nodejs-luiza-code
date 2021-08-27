// var exibirMensagem = function() {
//     msg = 'Nós somos incríveis';
//     console.log(msg);
//     var msg;
// }

// exibirMensagem();


var exibirMensagem = function() {
    if(true) {
        //diferença entre var = variável global e let = variável local
        var msg1 = 'Nós somos incríveis';
        let msg2 = `Brasilllllll`;

        console.log(msg1);
        console.log(msg2);
    }

    console.log(msg1);
    //console.log(msg2); vai dar erro, porque let obedece o grau dele no escopo
}

exibirMensagem();

