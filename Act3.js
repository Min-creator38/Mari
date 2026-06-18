const transacciones =[
{ id: 1, tipo: 'deposito', monto: 10000 },
{ id: 2, tipo: 'retiro', monto: 6000 },
{ id: 3, tipo: 'retiro', monto: 1500 },
{ id: 4, tipo: 'retiro', monto: 8000 }
]

const Retiros = transacciones => transacciones.tipo === 'retiro' 
const RetiroMayor = transacciones => transacciones.monto >= 5000

const Mayor5000 = transacciones => Retiros(transacciones) && RetiroMayor(transacciones)

const TransaccionesMayores = transacciones.filter(Mayor5000)
console.log(TransaccionesMayores)

const Tarifa = transacciones => RetiroMayor(transacciones)
const Multa = TransaccionesMayores.map(t => Number((t.monto * 0.05).toFixed(2)))
console.log(Multa)

const TotalMulta = Multa.reduce((a, valor) => a + valor)
console.log(TotalMulta)
