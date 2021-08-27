//callback é uma função que faz uma ação após algum acontecimento

function enviarEmail(corpo, para, callback) {
    setTimeout(()=> { //função que atrasa a execução da ação, o tempo informado
        console.log(`
            Para: ${para}
            --------------------------------------------------------
            ${corpo}
            --------------------------------------------------------
            De: Remetente
        `);
        callback(para, "Parabéns!"); //chama a função callback com os 2 parâmetro
    }, 5000) // = 5 segundos

}

/*
//OPÇÃO 1: É a mesma coisa que criar a arrow function na opção 2:
function call(email, outraCoisa) {
    console.log(`O email foi enviado com sucesso para ${email}. ${outraCoisa}`);
}
enviarEmail("Oieee, tudo bem?", "laomanogueira@gmail.com", call);
*/


//OPÇÃO 2: chama a função, onde os dois primeiros parâmetros são strings e o terceiro é uma função
enviarEmail("Oieee, tudo bem?", "laomanogueira@gmail.com", (email, outraCoisa) => { //cria function callback, com 2 parâmetros...
    console.log(`O email foi enviado com sucesso para ${email}. ${outraCoisa}`);
});

console.log(`Iniciando envio do email....`);
console.log(`Encerrando a caixa de email....`);