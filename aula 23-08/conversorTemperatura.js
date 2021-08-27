const rLine = require("readline-sync");

//converte a temperatura informada em °C, para kelvin e fahrenhait:
function converterTemp(temperaturaC) {
    console.log(`${tempCelsius}°C = ${(9 * temperaturaC / 5 + 32).toFixed(1)}°F = ${(temperaturaC + 273.15).toFixed(2)}K`);
}

let tempCelsius = rLine.questionFloat(`Informe a temperatura em °C: \n`);

converterTemp(tempCelsius);



//converte a temperatura, de acordo com a escala de origem e a desejada: 
function converteTemperatura(temperatura, escalaOrigem, escalaDesejada) {
    let apoio;
    if (escalaOrigem === "celsius") {
        if(escalaDesejada === "kelvin") {
            return temperatura + 273.15;
        } else {
            return (temperatura * 1.8) + 32;
        }

    } else if (escalaOrigem === "kelvin") {
        apoio = temperatura - 273.15;
        if(escalaDesejada === "celsius") {
            return apoio;
        } else {
            return (apoio * 1.8) + 32;
        }
    } else {
        apoio = (temperatura - 32) / 1.8;
        if(escalaDesejada === "celsius") {
            return apoio;
        } else {
            return apoio + 273.15;;
        }
    }
}

console.log(converteTemperatura(2.3, 'celsius', 'fahrenheit'));
