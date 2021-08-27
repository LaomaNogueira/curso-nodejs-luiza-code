// let cont = 0;

// //contador de 0 a 10
// while (cont <= 10) {
//     console.log(cont);
//     cont++;
// }

// let botaoValidar = document.getElementById('botaoValidar');
// botaoValidar.onchange('')

function pressionouBotao() {
    let ehnome = true;
    console.log(['Fora do while', ehnome])

    while (ehnome == true) {
        let nome = document.getElementById('entrada_1').value;
        console.log(nome);
        if (nome === 'Laoma') {
            ehnome = false;
        } else {
            console.log("Nome errado! Digite outro nome...");
        }
    }

    console.log('Saiu do while')
}