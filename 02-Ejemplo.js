//Freeze
const nombres = {nombre: "Min", rol: "Admin"};
nombres.rol = "User";
console.log(nombres);

const nombres2 = Object.freeze({nombre: "Min", rol: "Admin"});
const nombresmodi ={...nombres2, rol: "User"};
console.log();

const calificaciones= Object.freeze([80, 90, 90, 100]);
const SumaTotal = calificaciones.reduce((a, valor) => a + valor);
const Promedio = SumaTotal/califizaciones.length
console.log(SumaTotal)
console.log(promedio)