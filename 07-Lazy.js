const llenadoTanque = Object.freeze([
    "01-Magna",
    "02-Premium",
    "03-Magna",
    "04-Premium",
    "05-Premium"

])
//  Defin ir la regla o predicado
const esPrimium = id => id.includes("Premium");
// FDefinir la Funcion 
function* filtrarTipo(iterable, predicado){
    for(let gasolina of iterable){
      /* console.log("Analiza el arreglo: " , gasolina) */  
        if (predicado(gasolina)){
            yield gasolina;
        }
    }
} 
//  Definir la Consulta
const BombaCarga = filtrarTipo(llenadoTanque, esPrimium)
//Mostrar en pantalla
const Premium = BombaCarga
console.log("Gasolina:", Premium.next().value )
console.log("Gasolina:", Premium.next().value )
console.log("Gasolina:", Premium.next().value )