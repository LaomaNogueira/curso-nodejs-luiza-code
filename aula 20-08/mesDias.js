let mes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
let tot = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,]


for (var i = 0; i < mes.length; i++) { //lenght: retorna o tamanho do array
    console.log(`O mês de ${mes[i]} tem ${tot[i]} dias`); //var[i]: acessa o índice escolhido
}

// let mes1 = 'Fev';

// if(mes1 === 'Jan' || 'Mar' || 'Mai' || 'Jul' || 'Ago' || 'Out' || 'Dez') {
//     console.log(`O mês de ${mes1} tem 31 dias`);

// } else if(mes1 === 'Abr' || 'Jun' || 'Set' || 'Nov') {
//     console.log(`O mês de ${mes1} tem 30 dias`);

// } else if(mes1 === 'Fev') {
//     console.log(`O mês de ${mes1} tem 28 dias`);

// } else {
//     console.log(`Esse mês não existe!`);
// }
        
