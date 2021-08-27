function somar(numA, numB) {
    let a = Number(numA); //Number garante a conversão doe string pra número
    let b = Number(numB);
    
    if(Number.isNaN(a) || Number.isNaN(b)){ //isNaN = is not a number (não é número)
        console.log(`Não é número!`)
    } else {
        console.log(`O resultado foi: ${numA + numB}`);
    }
    
}

somar(2,2);


function verificaString(palavra) {
    if(typeof palavra == "string") {
        console.log(`Parabéns! Vc informou uma palavra!`);
    } else {
        throw new Error("Parâmetro inválido"); //cria um erro
    }

    console.log(`Programa continua...`)
}

verificaString('Taina');
verificaString(2);