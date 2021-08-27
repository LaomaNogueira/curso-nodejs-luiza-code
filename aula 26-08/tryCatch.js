try {
    //faça isso:
    console.log(`Seu nome é ${nome}`);
    console.log(`Seu nome é Taina`);
} catch(erro) { //se algo der errado, imprima um erro //parametro error, catch retorna o erro
    console.log(erro);//retorna o erro, ou imprimir uma mensagem de erro
} finally { //é executado, independente do try e do catch (normalmente não é utilizado)
    console.log(`encerrando o programa`);
}