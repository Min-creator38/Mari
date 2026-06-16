const hechos =[
    { relacion: "es_humano", sujeto:"Juancho"},
    {relacion:"es_humano", sujeto: "Daniela"},
    {relacion:"estudiante", sujeto: "Mario"},
    {relacion:"estudiante",  sujeto:"Yesi"},
    {relacion:"perro", sujeto:"Guapo"}
]
// programacion imperativa
const NuevoArreglo = [];
for (let i = 0; i < hechos.length; i++) {
    if (hechos[i].relacion === "estudiante") {
        NuevoArreglo.push(hechos[i]);
    }
}
console.log(NuevoArreglo);

//Programacion Funcional
const DatosEstudiantes = hechos.filter
(estudiante => estudiante.relacion === "estudiante");
console.log(DatosEstudiantes);

const DatEstudiantes = hechos.find(est => est.relacion === "estudiante");
console.log(DatEstudiantes);

const DatEst = hechos.some(es => es.relacion === "estudiante");
console.log(DatEst);

const nuevoDato = hechos.map(data =>data.relacion );
console.log(nuevoDato);

function EsMortal(sujeto){
    const EsHumano = hechos.some(h => h.relacion === "es_humano" && h.sujeto === sujeto);
    return EsHumano;
}
console.log(EsMortal("Daniela"));
console.log(EsMortal("Yessi"));
console.log(EsMortal("Guapo"));