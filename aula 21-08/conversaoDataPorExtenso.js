function dataPorExtenso(data) {
    dia = data.substr(0, 2);
    meses = ['janeiro', 'fevereiro',  'março', 'abri', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    mes = parseInt(data.substr(3, 2));
    ano = data.substr(6);
    console.log(`${dia} de ${meses[mes - 1]} de ${ano}`); //[mes-1] acessa o índice escolhido no array meses
}

function dataPorExtenso1(data) {
    let dataArray = data.split('/');
    dia = dataArray[0];
    meses = ['janeiro', 'fevereiro',  'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    mes = parseInt(dataArray[1]);
    ano = dataArray[2];
    console.log(`${dia} de ${meses[mes - 1]} de ${ano}`); //[mes-1] acessa o índice escolhido no array meses
}


dataPorExtenso('16/10/2018')

dataPorExtenso('15/09/2028')

dataPorExtenso1('15/02/2008')