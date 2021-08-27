let isValid = true;

//sem ternário
function verify(isValid) {
    if(isValid){
        return true;
    } else {
        return false;
    }
}

console.log(verify(isValid));

//com ternário
const result = isValid ? true : false;

let zero = -35;

const numeroResultado = zero > 0 ? `${zero} é positivo` : `${zero} é negativo`;

console.log(numeroResultado);