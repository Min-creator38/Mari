// Ejercicio 1

const cursos = [
{ titulo: 'React Avanzado', categoria: 'Desarrollo', esGratis: false, tieneCertificado: true },  
{ titulo: 'Introducción a UX/UI', categoria: 'Diseño', esGratis: true, tieneCertificado: false }, 
{ titulo: 'Node.js y MongoDB', categoria: 'Desarrollo', esGratis: true, tieneCertificado: true },  
{ titulo: 'Figma para Principiantes', categoria: 'Diseño', esGratis: false, tieneCertificado: false} 
]
//1. 
const cursosCatDes = cursos.filter(c => c.categoria === "Desarrollo" && c.tieneCertificado);
console.log(cursosCatDes);

//Corrección 
//(reglas)
const cursoDesarrollo = curso => curso.categoria === "Desarrollo";
const certificadoTrue = curso => curso.tieneCertificado === true;
//(combinaciones hechos)
const cursosDesarrolloCertificado = curso => cursoDesarrollo(curso) && certificadoTrue(curso);
//(consulta)
const resultado = cursos.filter(cursosDesarrolloCertificado);
console.log(resultado.map(c => c.titulo));


//2.
const cursosGratis_Diseño = cursos.filter(c => c.esGratis || c.categoria === "Diseño");
console.log(cursosGratis_Diseño);

const cursosNoCertificado = cursos.filter(c => !c.tieneCertificado);
console.log(cursosNoCertificado);

const cursosDesoBen = cursos.filter(c => c.categoria === "Desarrollo" && (c.esGratis || c.tieneCertificado));
console.log(cursosDesoBen);


// Ejercicio 2

const Familia =[
    {Padre: "Juan", Hijo: "Luis"},
    {Padre:"Juan", Hijo: "Pedro"},
    {Padre: "Abraham", Hijo: "Juan"},
]

const Hermanos = Familia.filter(h => h.Padre === "Juan").map(h => h.Hijo);
console.log(Hermanos);

// Encontrar Abuelo, Padre, Nieto
const AbuPaNieto = Familia.flatMap(fam => {
    const nieto = Familia.find(f => f.Padre === fam.Hijo);
    return nieto ? [{ abuelo: fam.Padre, padre: fam.Hijo, nieto: nieto.Hijo }] : [];
});
console.log(AbuPaNieto);


// Ejercicio 3

// Abraham es padre de juan?
const PadreJuan = Familia.find(f => f.Padre === "Abraham" && f.Hijo === "Juan");
console.log(PadreJuan ? "Abraham es padre de Juan" : "No es padre de Juan");

// ¿Quién es el padre de Luis?
const padreLuiS = Familia.find(f => f.Hijo === "Luis");
console.log(padreLuiS ? `El padre de Luis es ${padreLuiS.Padre}` : "No tiene papa");

// Quienes son los hijos de Juan?
const hijosJuan = Familia.filter(f => f.Padre === "Juan").map(f => f.Hijo);
console.log(`Los hijos de Juan son: ${hijosJuan.join(", ")}`);