const rLine = require("readline-sync");

let nome = rLine.question(`Informe o nome da aluna: \n`);

let nota1 = rLine.question(`Digite N1: \n`);
let nota2 = rLine.question(`Digite N2: \n`);
let nota3 = rLine.question(`Digite N3: \n`);

let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

if(media < 5) {
    console.log(`${nome} - Reprovou! Média: ${(media.toFixed(2))}`);

} else if(media <= 7) {
    console.log(`${nome} - Recuperação! Média: ${media.toFixed(2)}`);
    
} else {
    console.log(`${nome} - Passou direto!!! ${media.toFixed(2)}`);
}
