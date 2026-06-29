// Ejercicio 1: 
const transacciones = Object.freeze([
    { id: 101, tipo: 'deposito', monto: 60000, pais: 'México' },
    { id: 102, tipo: 'retiro',   monto: 15000, pais: 'Colombia' },
    { id: 103, tipo: 'retiro',   monto: 12000, pais: 'México' },
    { id: 104, tipo: 'retiro',   monto: 55000, pais: 'México' },
    { id: 105, tipo: 'deposito', monto: 90000, pais: 'Francia' },
    { id: 106, tipo: 'retiro',   monto: 75000, pais: 'Espana' }
])

// Predicados 
const Retiro = t => t.tipo === 'retiro'
const MontoSospechoso = t => t.monto >= 50000
const ZonaDeRiesgo = t => t.pais !== 'México'

// Regla 
const alertaFraude = t => Retiro(t) && (MontoSospechoso(t) || ZonaDeRiesgo(t))

//Evaluación Perezosa
function* FiltrarFraude(transacciones){
    for (let t of transacciones){
        if(alertaFraude(t)){
            yield t
        }
    }
}

const ConsumeFlujo = FiltrarFraude(transacciones)
const PrimeraAlertas = []
for (const alerta of ConsumeFlujo) {
    PrimeraAlertas.push(alerta)
    if (PrimeraAlertas.length === 2) {
        break
    }
}
console.log('primeras alertas:')
console.log(PrimeraAlertas)


// Ejercicio 2: 
const aspirantes = [ 
    { nombre: 'Luis',  examen: 90, entrevista: 80, estudioSocioeconomico: true },
    { nombre: 'Elena', examen: 70, entrevista: 90, estudioSocioeconomico: true },
    { nombre: 'Pedro', examen: 95, entrevista: 90, estudioSocioeconomico: false },  
    { nombre: 'María', examen: 85, entrevista: 95, estudioSocioeconomico: true },   
    { nombre: 'Iván',  examen: 90, entrevista: 90, estudioSocioeconomico: true }
]

function deepFreeze(obj) {
    if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
        Object.freeze(obj)
        for (const key of Object.keys(obj)) {
            deepFreeze(obj[key])
        }
    }
    return obj
}

deepFreeze(aspirantes)

const aspirantesConPuntaje = Object.freeze(
    aspirantes.map(a => Object.freeze({
        ...a,
        puntajeFinal: +(a.examen * 0.7 + a.entrevista * 0.3)
    }))
)

const calificaParaBeca = a => a.puntajeFinal >= 85 && a.estudioSocioeconomico === true

function* filtrarBecados(iterable, pred) {
    for (const item of iterable) {
        if (pred(item)) yield item
    }
}
const becados = []
for (const becado of filtrarBecados(aspirantesConPuntaje, calificaParaBeca)) {
    becados.push(becado)
    if (becados.length === 2) break
}
const promedioBecados = becados.length > 0
    ? +(becados.reduce((sum, x) => sum + x.puntajeFinal, 0) / becados.length): 0

console.log('Becados seleccionados:', becados)
console.log('Promedio: ', promedioBecados)




// Ejercicio 2: 
const paquetes = Object.freeze([ 
    { tracking: 'ZA1', estado: 'Tabasco', peso: 20 }, 
    { tracking: 'ZA2', estado: 'Veracruz', peso: 18 }, 
    { tracking: 'ZA3', estado: 'Chiapas', peso: 5 }, 
    { tracking: 'ZA4', estado: 'Yucatán',  peso: 25 },  
    { tracking: 'ZA5', estado: 'Tabasco', peso: 10 }, 
    { tracking: 'ZA6', estado: 'Oaxaca',   peso: 30 }  
]);

deepFreeze(paquetes)

const esDestinoLocal = p => p.estado === "Tabasco";
const esPesado = p => p.peso >= 15

const  envioPrioritarioLocal = p => !esDestinoLocal(p) && esPesado(p)

function* EnvioLocal (lista){
    for( let paquete of lista) {
        if( envioPrioritarioLocal(paquete)){
            yield paquete
        }
    }
 }

 const FlujoPaquete = EnvioLocal(paquetes)
 let camion = []
 for( const paquete of FlujoPaquete){
    camion.push(paquete);
    if(camion.length ===2){
        break
    }
 }
console.log("Paquetes seleccionados");
console.log(camion);