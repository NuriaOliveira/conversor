
const CaF = (x) =>  {return x * 1.8 + 32}
const FaC = (x) =>  {return x - 32 / 18}
const CaK = (x) => {return x + 273.15}
const KaC = (x) => {return 5/9 (x-32) + 273.15}
let resultado

let val1 = prompt("Imgrese la temperatura en Celsius");
let tipoTemperatura = prompt("Ingrese F para convertir a Fahrenheit o K para convertir a Kelvin").toUpperCase()

while(!( tipoTemperatura == 'K' || tipoTemperatura == 'F'))
{
    tipoTemperatura = prompt("Ingrese F para convertir a Fahrenheit o K para convertir a Kelvin").toUpperCase()
}

switch(tipoTemperatura)
{
    case 'F':
        resultado = CaF(val1);
        break;
        case 'K':
            resultado = CaK(val1);
            break;
            default:
                console.log("Nada para mostrar")
}

console.log(`${val1} C° son ${resultado} ${tipoTemperatura}`)
