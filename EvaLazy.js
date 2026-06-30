                //Caso de estudio 1. 
const peticionesHttp = [ 
    { id: "REQ-01", metodo: "GET",  ipOrigen: "192.168.1.50", latenciaMs: 45,   tamanioPayloadKb: 2,    payload: "SELECT * FROM users" }, 
    { id: "REQ-02", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 2500, tamanioPayloadKb: 1500, payload: "DROP TABLE users;--" },  
    { id: "REQ-03", metodo: "GET",  ipOrigen: "192.168.1.55", latenciaMs: 12,   tamanioPayloadKb: 1,    payload: "ping" }, 
    { id: "REQ-04", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 1800, tamanioPayloadKb: 950,  payload: "normal_profile_update" }, 
    { id: "REQ-05", metodo: "POST", ipOrigen: "192.168.1.70", latenciaMs: 3100, tamanioPayloadKb: 1200, payload: "upload_heavy_image" },    
    { id: "REQ-06", metodo: "GET",  ipOrigen: "172.16.25.40", latenciaMs: 50,   tamanioPayloadKb: 500,  payload: "exec MaliciousScript" }  ]; 

    //Congelamiento profundo
    function deepFreeze(obj) {
    if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
        Object.freeze(obj)
        for (const key of Object.keys(obj)) {
            deepFreeze(obj[key])
        }
    }
    return obj
}
    deepFreeze(peticionesHttp)

    // Predicados Atómicos
    const esMetodoEscritura = x => x.metodo === "POST"
    const esLatenciaAlta = x => x.latenciaMs >= 2000
    const esPayloadSospechoso = x => /SELECT|DROP|MaliciousScript/i.test(String(x.payload));

    // Reglas lógicas. 
    const detectarAmenazaPotencial = x => esMetodoEscritura(x) && esLatenciaAlta(x) || esPayloadSospechoso(x)

   // Optimización lazy. 

   function* analizadorSeguridadLazy (flujo, regla){
    for(const elemento of flujo){
        if(regla(elemento)){
            yield elemento
        }
    }
}
 const Analizador = analizadorSeguridadLazy (peticionesHttp, detectarAmenazaPotencial)
 const Amenazas = [];

 while( Amenazas.length < 2 ){
    const Resultados = Analizador.next()
    if(Resultados.node) break 
    Amenazas.push (Resultados.value)
    }
    const PromedioPaylod = Amenazas.reduce((acumulador, Amenazas, indice, arr) => {
        return acumulador + Amenazas.tamanioPayloadKb / arr.length }, 0 )
        
        console.log( "Las amenazas detectadas son: " , Amenazas)
        console.log( "El promedio es : " , PromedioPaylod )



        //Caso de estudio 2. 
 const ordenesEnvio = [ 
    { id: "ORD-101", tipo: "estandar", destino: "Tabasco", pesoKg: 4,   distanciaKm: 8,   asegurado: false }, 
    { id: "ORD-102", tipo: "express",  destino: "Veracruz", pesoKg: 22,  distanciaKm: 120, asegurado: true },   
    { id: "ORD-103", tipo: "estandar", destino: "Tabasco", pesoKg: 1.5, distanciaKm: 15,  asegurado: false }, 
    { id: "ORD-104", tipo: "express",  destino: "Tabasco", pesoKg: 5,   distanciaKm: 3,   asegurado: false }, 
    { id: "ORD-105", tipo: "express",  destino: "Yucatán",  pesoKg: 18,  distanciaKm: 250, asegurado: false },  
    { id: "ORD-106", tipo: "express",  destino: "Chiapas",  pesoKg: 35,  distanciaKm: 190, asegurado: true } ]; 

      deepFreeze(peticionesHttp)

    const esEnvioExpress = x => x.tipo === "express"
    const esPaquetePesado = x => x. pesoKg  >= 15
    const esRutaForanea = x => !x.destino === "Tabasco"

const esDespachoPrioritario = x => esEnvioExpress(x) &&esPaquetePesado(x) ||esRutaForanea(x)
  function* despachadorOrdenesLazy(flujo, regla) {
    for(const orden of flujo){
        if(regla(orden)){
            yield orden
        }
    }
  }
  const Despachador = despachadorOrdenesLazy(ordenesEnvio, esDespachoPrioritario)
  const SeleccionDespacho =[]

  while( SeleccionDespacho.length < 2 ){
    const Resultados = Despachador.next()
    if(Resultados.node) break 
    SeleccionDespacho.push (Resultados.value)
    }
    const promedioDistancia = SeleccionDespacho.length === 0
  ? 0
  : SeleccionDespacho.reduce((acc, orden) => acc + orden.distanciaKm, 0) / SeleccionDespacho.length;

console.log("Órdenes prioritarias seleccionadas:", SeleccionDespacho);
console.log("Promedio de distancia del despacho:", promedioDistancia);

