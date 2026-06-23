            //EJERCICIO 1

            // --- CÓDIGO INICIAL (A TRANSFORMAR) ---
  //function generarIds(){ 
    //const ids = [];  
   // for (let i = 1; i <= 100; i++){ ids.push(`TEC-2026-${i}`);  } 
//return ids; --- Retorna los 100 IDs saturando memoria de inmediato } 

         // Funcion perezosa
    function* GenerarId(){
        for ( let i = 1; i <= 100; i++ ){
            yield `TEC-2026-${i}`
        }
    }
    const ids = GenerarId(); 
    console.log(ids.next().value)
    console.log(ids.next().value)
    console.log(ids.next().value)


            //EJERCICIO 2

    // --- CÓDIGO INICIAL (A TRANSFORMAR) --- 
    // const dbPosts = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"]; 
    // function obtenerTodoElFeed(posts){
    // console.log("-> Procesando e indexando todos los posts en el cliente..."); 
    // return posts.map(p => `<html>${p}</html>`); } 

             // Funcion perezosa
         const dbPosts = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"]

         function* obtenerTodoElFeed(posts){
            for (let post of posts){
                yield `<html>${post}</html>`
            }
        }
        const feed = obtenerTodoElFeed(dbPosts)
        for( let i = 0; i < 3; i ++){
            console.log(feed.next().value)
        }


               //EJERCICIO3
        // --- CÓDIGO INICIAL (A TRANSFORMAR) --- 
        // const logsServidor = ["200 OK", "200 OK", "500 ERROR", "200 OK", "500 ERROR", "404 NOT FOUND"]; 
        // function buscarTodosLosErrores(logs) { return logs.filter(log => log.includes("500")); 
        // Retorna un array con todos } 

           // Funcion perezosa
         const logServidor = ["200 OK", "200 OK", "500 ERROR", "200 OK", "500 ERROR", "404 NOT FOUND"]; 
        
         function* buscarTodosLosErrores(logs) {
            for (let log of logs){
                if( log.includes("500")){
                    yield log
                }
         }
    }
    const error = buscarTodosLosErrores(logServidor);
     console.log(error.next().value)

    
        
                //EJERCICI    O4
         
        // --- CÓDIGO INICIAL (A TRANSFORMAR) --- 
        // function serieFibonacciEager(limite){ 
        // let secuencia = [0, 1]; 
        // for (let i = 2; i < limite; i++){
        //  secuencia.push(secuencia[i - 1] + secuencia[i - 2]); 
        // } return secuencia; // Si pides un límite muy grande, truena la memoria } 
       
        function* serieFibonacciEager(limite){
            let a = 0;
            let b = 1;

            if (limite > 0) {
                yield a;
            }
            if (limite > 1) {
                yield b;
            }

            for (let i = 2; i < limite; i++) {
                const siguiente = a + b;
                yield siguiente;
                a = b;
                b = siguiente;
            }
        }

        const fibonacci = serieFibonacciEager(10);
        console.log(fibonacci.next().value);
        console.log(fibonacci.next().value);
        console.log(fibonacci.next().value);



              //EJERCICI    05

        // --- CÓDIGO INICIAL (A TRANSFORMAR) --- 
        // const preciosAlmacen = [100, 200, 300, 400, 500]; 
        // function aplicarIvaATodo(precios) { 
        // const procesados = []; for(let precio of precios) { 
        // procesados.push(precio * 1.16); } return procesados; } 

        const preciosAlmacen = [100, 200, 300, 400, 500]; 
        function* aplicarIvaATodo(precios) {
            for( precio of precios){
                yield precio * 1.16
            }
        }
        const CarritoCompra = aplicarIvaATodo(preciosAlmacen)

        console.log(CarritoCompra.next().value)
        console.log(CarritoCompra.next().value)
        console.log(CarritoCompra.next().value)
        console.log(CarritoCompra.next().value)
        console.log(CarritoCompra.next().value)

