const datos ={
    nombre: "Min",
    edad: 40,
    Ciudad: "Balancan",
    Intereses: ["Crear", "Pintar"]
};
     //     Ocultar Propiedades
     Object.defineProperty(datos, "edad", {enumerable: false})
     console.log(Object.keys(datos));
     console.log(Object.getOwnPropertyNames(datos));


// Validar Propiedades
function deepFreeze(obj) {
if ( obj === null || typeof obj !== 'object' || Object.isFrozen(obj)) {
    return obj;
}
//Obtener todo el Objeto
const PropObjet = Object.getOwnPropertyNames(obj);
//Recoorer cada una de las propiedades
for(let nombres of PropObjet){
    const PropChildren = obj[nombres]
    //Aplicamos la funcion recursiva
    if(PropChildren && typeof PropChildren === 'object'){
        deepFreeze(PropChildren)
    }
 }
 //Congelamos todo el objeto con sus hijos
 return Object.freeze(obj);
}

//Pasar el objeto a la funcion recursiva
const datosInmutables = deepFreeze(datos);
const NuevoNombre= datosInmutables.Ciudad ="Tacotalpa"
const NuevoInteres= datosInmutables.Intereses.push("Java")
console.log(NuevoNombre)
console.log(NuevoInteres)