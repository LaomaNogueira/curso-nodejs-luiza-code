let peso = 100;
let altura = 1.70;

let imc = peso / (altura * altura);

if (imc < 19.1) {
    console.log(`IMC = ${parseFloat(imc).toFixed(2)}, abaixo do peso`);

} else if (imc >= 19.1 && imc < 25.8) {
    console.log(`IMC = ${parseFloat(imc).toFixed(2)}, no peso normal`);

} else if (imc >= 25.8 && imc < 27.3) {
    console.log(`IMC = ${parseFloat(imc).toFixed(2)}, marginalmente acima do peso`);

} else if (imc >= 27.3 && imc <= 32.3) {
    console.log(`IMC = ${parseFloat(imc).toFixed(2)}, acima do peso ideal`);

} else {
    console.log(`IMC = ${parseFloat(imc).toFixed(2)}, obeso`);
}