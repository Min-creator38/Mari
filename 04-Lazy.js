// Generar numero primos con funcion imperativa
const PrimoNum = num => {
    if(num<2) return false;
    for( let i = 2; i <= Math.sqrt(num); i++ ){
        if(num%i==0) return false
    }
    return true;
}

// Funcionn Lazy
function* generarPrimos(){
    let eval =2
    while(true){
        if(PrimoNum(eval)){
            yield eval
        }
        eval++
    }
}


const numPrimo = generarPrimos()
console.log("primo 1: ", numPrimo.next().value)
console.log("primo 2: ", numPrimo.next().value)
console.log("primo 3: ", numPrimo.next().value)
console.log("primo 4: ", numPrimo.next().value)
console.log("primo 5: ", numPrimo.next().value)
console.log("primo 6: ", numPrimo.next().value)
console.log("primo 70: ", numPrimo.next().value)