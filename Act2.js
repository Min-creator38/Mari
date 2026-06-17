        // Ejercici 3

const Usuarios = [
    { nombre: 'Ana', edad: 25, rol: 'admin', activo: true },
    { nombre: 'Carlos', edad: 17, rol: 'user', activo: true },
    { nombre: 'Beto', edad: 30, rol: 'user', activo: false },
]
// Regla:
const cuentaInhabilitada = usuario => usuario.activo === false
const cuentaActiva = usuario => usuario.activo === true
const esAdministrador = usuario => usuario.rol === 'admin'
const EdadMayor = usuario => usuario.edad >= 18
const menorDeEdad = usuario => usuario.edad < 18

// Combinacion hechos
const correo = Usuario => cuentaInhabilitada(Usuario)
// Consulta:
const usuariosNoti = Usuarios.filter(cuentaInhabilitada)
console.log(' Usuarios a notificar (cuenta deshabilitada):')
console.log(usuariosNoti.map(u => u.nombre))

// Combinación de hechos:
const Acceso = usuario => cuentaActiva(usuario) && EdadMayor(usuario)
// Consulta:
const usuariosAcceso = Usuarios.filter(Acceso)
console.log(' Usuarios Autorizados:')
console.log(usuariosAcceso.map(u => u.nombre))

// Combinación de hechos:
const usuarioEspecial = usuario => esAdministrador(usuario) && menorDeEdad(usuario)
// Consulta:
const usuariosEspeciales = Usuarios.filter(usuarioEspecial)
console.log('Usuarios especiales:')
console.log(usuariosEspeciales.map(u => u.nombre))

// Combinación de hechos:
const puedeEditar = usuario => cuentaActiva(usuario) || (esAdministrador(usuario) || EdadMayor(usuario))
// Consulta:
const usuariosPermiso = Usuarios.filter(puedeEditar)
console.log('Usuario Editor:')
console.log(usuariosPermiso.map(u => u.nombre))





    //Ejercicio 4

const Clientes =[
    {nombre:  "Luis", HistorialLimpio:"true", IngresosEstables:"true"},
    {nombre:  "Maria", HistorialLimpio:"true", IngresosEstables:"false"},
    {nombre:  "Jorge", HistorialLimpio:"false", IngresosEstables:"true"}
]
   //Reglas 
const Historial = Clientes => Clientes.HistorialLimpio === "true"  
const Ingreso = Clientes => Clientes.IngresosEstables === "true"
const NoHistorial = Clientes => Clientes.HistorialLimpio === "false"
const NoIngreso = Clientes => Clientes.IngresosEstables === "false"

//combinacion de hechos
const CreditoBlack = Clientes => Historial(Clientes) && Ingreso(Clientes)
//consulta 
const clientesCreditoBlack = Clientes.filter(CreditoBlack)
console.log('Clientes con credito Black:')
console.log(clientesCreditoBlack.map(c => c.nombre))

//Combinacion de hechos
const reactivacion = Clientes => NoHistorial(Clientes) || NoIngreso(Clientes)
//consultas 
const clientesReactivacion = Clientes.filter(reactivacion)
console.log('Clientes para reactivacion:')
console.log(clientesReactivacion.map(c => c.nombre))

//combinacion de hechos
const creditoRegular = Clientes => NoHistorial(Clientes) && Ingreso(Clientes)
//consulta 
const clientesCreditoRegular = Clientes.filter(creditoRegular)
console.log('Clientes con credito regular:')
console.log(clientesCreditoRegular.map(c => c.nombre))

//combinacion de hechos 
const Riesgo = Clientes => NoHistorial(Clientes) && NoIngreso(Clientes)
//consulta 
const Alerta = Clientes.some(Riesgo)
console.log ("Alerta Critica:", Alerta)

//combinacion de hechos
const NoRiesgo = Clientes => Historial(Clientes) && Ingreso(Clientes)
const Certificado = Clientes.filter(NoRiesgo)
console.log("La calidad de la cartera es:", Certificado)