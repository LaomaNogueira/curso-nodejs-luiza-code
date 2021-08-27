let codigoPedido = 100;
let qtdade = 10;
let total = 0;

switch (codigoPedido) {
    case 100:
        total = parseFloat(qtdade * 1.20).toFixed(2);
        console.log(`Pedido cachorro quente - valor total = R$${total}`);
        break;
    case 101:
        total = parseFloat(qtdade * 1.30).toFixed(2);
        console.log(`Pedido bauru simples - valor total = R$${total}`);
        break;
    case 102:
        total = parseFloat(qtdade * 1.50).toFixed(2);
        console.log(`Pedido bauru com ovo - valor total = R$${total}`);
        break;
    case 103:
        total = parseFloat(qtdade * 1.20).toFixed(2);
        console.log(`Pedido hamburguer - valor total = R$${total}`);
        break;
    case 104:
        total = parseFloat(qtdade * 1.30).toFixed(2);
        console.log(`Pedido cheeseburguer - valor total = R$${total}`);
        break;
    case 105:
        total = parseFloat(qtdade * 1.00).toFixed(2);
        console.log(`Pedido refrigerante - valor total = R$${total}`);
        break;
    default:
        console.log(`Código do produto ${codigoPedido} não existe!`);
}