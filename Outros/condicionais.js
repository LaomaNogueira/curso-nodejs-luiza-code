var nome = "Nogueira";

/*
if (nome === 'Laoma') {                         //se
    console.log('Legal! Esse é seu nome!');
} else if (nome === "Nogueira") {               //senão se
    console.log("Tudo bem! Vc serve...");
} else {                                        //senão
    console.log("Que pena, não é você!");
}*/


switch (nome) {
    case "Laoma":
        console.log("Legal! Esse é seu nome!");
        break;
    case "Nogueira":
        console.log("Tudo bem! Vc serve...");
        break;
    default:
        console.log("Que pena, não é você!");
        break;
}