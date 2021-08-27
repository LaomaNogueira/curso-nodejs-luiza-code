function pegarId() {
    console.log(`Buscando o ID`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 2000) //2seg
    })
}


function buscarEmail(id) {
    console.log(`Buscando o email`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`laomanogueira@gmail.com`);
        }, 3000)
    })
}


function enviarEmail(corpo, para) {
    console.log(`Enviando o email`);

    return new Promise((resolve, reject) => { //Promise = classe que retorna uma promessa de resposta
        setTimeout(()=> {
            let emailEnviado = true;
            
            if(emailEnviado) {
                resolve({email: para, tempo: "5s"}); //prometeu e resolveu = ok , recebeu objeto com vários atributos
            } else {
                reject(para); //prometeu e rejeitou = falha
            }
            
        }, 5000) //tempo de atraso 5seg
    })
}

// async function main() {
//     var id = await pegarId(); //await - tudo que estiver abaixo dele, espera essa função ser executada
//     var email = await buscarEmail(id); //await - tudo que estiver abaixo dele, espera essa função ser executada
    
//     await enviarEmail("Oieee, tudo bem?", email).then(({email, tempo}) => { //executa then se o retorno da promessa for resolve
//         console.log(`O email foi enviado com sucesso para ${email}`);
//         console.log(`Duração do envio: ${tempo}`);
//     }).catch((email) => { //executa catch se o retorno da promessa for reject
//         console.log(`Houve falha no envio do email, para ${email}!!!`);
//     })

//     console.log(`Encerrando a caixa de email....`);
    
// }

//------------------OU--------------------

async function main() {
    var id = await pegarId(); //await - tudo que estiver abaixo dele, espera essa função ser executada
    var email = await buscarEmail(id); //await - tudo que estiver abaixo dele, espera essa função ser executada
    
    try {
        await enviarEmail("Oieee, tudo bem?", email);
        console.log(`O email foi enviado com sucesso para ${email}`);
        console.log(`Duração do envio: ${tempo}`);
        console.log(`Encerrando a caixa de email....`);
    } catch(e) {
        console.log(`Houve falha no envio do email, para ${email}!!!`);
    }
    
}


main();














