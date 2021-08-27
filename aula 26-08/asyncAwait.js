function pegarUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { nome: 'Laoma', hobby: 'dançar'},
                { nome: 'Fernanda', hobby: 'comer'},
                { nome: 'Manu', hobby: 'dormir'},
            ])
        }, 5000)
    })
}

async function main() {//async espera uma promessa
    var usuarios = await pegarUsuarios(); //await - tudo que estiver abaixo dele, espera essa função ser executada
    console.log(usuarios);
}

//Principal
main();