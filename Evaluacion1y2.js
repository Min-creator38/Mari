const Servicios =[
    {id:"1", nombre:"Autenticacion", zona:"us-east", consultasPorMinuto:"12000", activo:"true", tecnologias:["Node.js", "Redis"]},
    {id:"2", nombre:"ProcesamientoPagos", zona:"us-west", consultasPorMinuto:"4500", activo:"true", tecnologias:["Java", "Spring"]},
    {id:"3", nombre:"RecomendacionesAI", zona:"us-east", consultasPorMinuto:"25000", activo:"false", tecnologias:["Python", "TensorFlow"]},
    {id:"4", nombre:"Notificaciones", zona:"ue-central", consultasPorMinuto:"8500", activo:"true", tecnologias:["Node", "RabbitMQ"]},
    {id:"5", nombre:"ReportesHistoricos", zona:"us-west", consultasPorMinuto:"1500", activo:"false", tecnologias:["Python", "MongoDB"]},
]
    //Reglas
const EstaActivo = Servicio => Servicio.activo === "true"
const EsZonaUs = Servicio => Servicio.zona === "us-east" || Servicio.zona === "us-west"
const AltaCarga = Servicio => parseInt(Servicio.consultasPorMinuto) >= 10000
const UsaNode = Servicio => Servicio.tecnologias.includes("Node")

      //Combinacion de hechos

const MantenimientoUrgente = Servicio => !EstaActivo(Servicio) && AltaCarga(Servicio)
const ServicioCritico = Servicio => EstaActivo(Servicio) && EsZonaUs(Servicio) && AltaCarga(Servicio)
const MigrarCloudFlare = Servicio => EsZonaUs(Servicio) && UsaNode(Servicio) && !AltaCarga(Servicio)

     //Consultas
const ServiciosMa = Servicios.filter(MantenimientoUrgente).map(s => s.nombre)
console.log("Requieren mantenimiento urgente:")
console.log(ServiciosMa)

const Criticos = Servicios.filter(ServicioCritico).map(s => s.nombre)
console.log("Estado críticos:")
console.log(Criticos)

const Migrar = Servicios.filter(MigrarCloudFlare).map(s => s.nombre)
console.log("Servicios por migrar a CloudFlare:")
console.log(Migrar)

const TotalConsulta = Servicios.filter(EstaActivo ).reduce((total, s) => total + parseInt(s.consultasPorMinuto), 0)
console.log("Consultas por minutos:")
console.log(TotalConsulta)