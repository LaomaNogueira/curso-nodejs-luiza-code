//callback é uma função que faz uma ação após algum acontecimento


function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => { //Promise = classe que retorna uma promessa de resposta
        setTimeout(()=> {
            let emailEnviado = true;
            
            if(emailEnviado) {
                resolve({email: para, tempo: "5s"}); //prometeu e resolveu = ok , recebeu objeto com vários atributos
            } else {
                reject(para); //prometeu e rejeitou = falha
            }
            
        }, 5000) // = tempo de atraso 5 segundos
    })
}

//objeto com vários atributos faz o mesmo que o objeto do resolve:
// dados = { //objeto
//     email: para;
//     tempo: "4s"
// }
//pessoa.nome; //para acessar


//programa inicia aqui
console.log(`Iniciando envio do email....`);

//chama a função, onde os dois primeiros parâmetros são strings e o terceiro é uma função
enviarEmail("Oieee, tudo bem?", "laomanogueira@gmail.com").then(({email, tempo}) => { //executa then se o retorno da promessa for resolve
    console.log(`O email foi enviado com sucesso para ${email}`);
    console.log(`Duração do envio foi ${tempo}`);
}).catch((email) => { //executa catch se o retorno da promessa for reject
    console.log(`Houve falha no envio do email, para ${email}!!!`);
});

console.log(`Encerrando a caixa de email....`);

