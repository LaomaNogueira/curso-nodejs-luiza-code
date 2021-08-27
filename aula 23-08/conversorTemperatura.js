const rLine = require("readline-sync");

//converte a temperatura informada em °C, para kelvin e fahrenhait:
function converterTemp(temperaturaC) {
    console.log(`${tempCelsius}°C = ${(9 * temperaturaC / 5 + 32).toFixed(1)}°F = ${(temperaturaC + 273.15).toFixed(2)}K`);
}

let tempCelsius = rLine.questionFloat(`Informe a temperatura em °C: \n`);

converterTemp(tempCelsius);
