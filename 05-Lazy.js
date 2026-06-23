           //Obtener turno
function ObtenerTurno(){
    let contador = 1;
    const turno = `Turno ${contador}`
    contador ++
    return turno;
}
console.log(ObtenerTurno())
console.log(ObtenerTurno())


function* obtenerTurnoY(){
    let contador = 1;
    while(true){
        yield `Turno ${contador}`;
        contador ++;
    }
}

const Cajero = obtenerTurnoY()
console.log(Cajero.next().value)
console.log(Cajero.next().value)
console.log(Cajero.next().value)




//Procesadoor de palabras
function ProcesadorPalabra (frase){
const Palabras = frase.split(" ")
const resultado = [];
for(let palabra of Palabras){
    console.log(`Procesado completo: ${palabra}`)
    resultado.push(palabra.toUpperCase());
}
return resultado;
}
const PalabrasEscritas = ProcesadorPalabra
("Programacion con JS");
console.log("resultado:", PalabrasEscritas[0])

 //Funcion perezosa
function* ProcesadorDatos (frase){
    const Palabras = frase.split (" ");
    for( let Palabra of Palabras){
        console.log(`Procesado de Datos: ${Palabra}`)
        yield Palabra.toUpperCase()
    }
}
const TextoLeido = ProcesadorDatos("Programas con JS")

console.log(" Solo lectura a la primera");
console.log("Resultado",  TextoLeido.next().value)

console.log(" Solo lectura a la segunda");
console.log("Resultado",  TextoLeido.next().value)

console.log(" Solo lectura a la tercera");
console.log("Resultado",  TextoLeido.next().value)