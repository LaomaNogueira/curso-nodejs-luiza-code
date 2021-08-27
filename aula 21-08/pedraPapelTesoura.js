/*Dois jogadores
Cada jogador escolhe pedra, papel ou tesoura
Papel > pedra > tesoura > papel
E o programa vai dizer quem ganhou*/


function jogar(jogador1, jogador2) {
    if (jogador1 == "pedra" && jogador2 == "papel"){
        console.log(`${jogador1} ganhou! Pedra prende papel`);
    
    } else if (jogador1 == "pedra" && jogador2 == "tesoura"){
        console.log(`${jogador1} ganhou! Pedra quebra tesoura`);

    } else if (jogador1 == "papel" && jogador2 == "tesoura"){
        console.log(`${jogador2} ganhou! Tesoura corta papel`);

    } else if (jogador1 == "papel" && jogador2 == "pedra"){
        console.log(`${jogador2} ganhou! Pedra prende papel`);

    } else if (jogador1 == "tesoura" && jogador2 == "papel"){
        console.log(`${jogador1} ganhou! Tesoura corta papel`);
    
    } else if (jogador1 == "tesoura" && jogador2 == "pedra"){
        console.log(`${jogador2} ganhou! Pedra quebra tesoura`);
             
    } else {
        console.log(`${jogador1} = ${jogador2}. Empate!!!`)
    }
}

console.log('Digite pedra, papel ou tesoura:')
let player1 = 'pedra';
let player2 = 'tesoura';

jogar(player1, player2);
