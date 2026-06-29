//Combinar programacion lazy con funcional
//Definir los predicados atomicos
const esPar = n => n%2 ===0;
const multiploCinco = n => n %5 ===0;
//Definimos la funcion
function* filtrarNumero(iterable, predicado){
    for(let dato of iterable){
        if (predicado(dato)){
            yield dato 
        }
    }
}

function* generarNumeros(){
    let i = 0;
    while (true) yield i++;

}

//generar los numeros atraves de una variable
const NumeroAleatorio = generarNumeros()
const generarPar = filtrarNumero(NumeroAleatorio, esPar)
console.log("generar numero par: ", generarPar.next().value)
console.log("generar numero par: ", generarPar.next().value)
console.log("generar numero par: ", generarPar.next().value)
console.log("generar numero par: ", generarPar.next().value)

//Multiplo de cinco
const generarMultCinco = filtrarNumero(NumeroAleatorio, multiploCinco)
console.log("generar multiplo de Cinco: ", generarMultCinco.next().value)
console.log("generar multiplo de Cinco: ", generarMultCinco.next().value)
console.log("generar multiplo de Cinco: ", generarMultCinco.next().value)
console.log("generar multiplo de Cinco: ", generarMultCinco.next().value)
console.log("generar multiplo de Cinco: ", generarMultCinco.next().value)