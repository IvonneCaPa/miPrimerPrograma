// BUCLE FOR "Clasico"

//Significa para que lo que hay dentro de las llaves se ejecutara tantas veces como lo indiquemos en el 
//parentesis

let array_frutas =["mango", "Pera", "Cereza", "platano", "castaña"]

//Primero accedemos al primer valor, (punto y coma) valor que acaba con el length (punto y coma) el criterio de incremento
for(let i=0; i < array_frutas.length; i++){
    console.log(array_frutas[i])
}

//Para acceder a los elementos pares del listado
for(let i=0; i < array_frutas.length; i+=2){
    console.log(array_frutas[i])
}

//Si quiero cambiar algo de cada elemento debo hacer otro array, creo uno nuevo
let array_frutas_may = []

//Luego accedo a los elementos uno por uno

for(let i=0; i < array_frutas.length; i++){
    array_frutas[i]
    let fruta_ok = array_frutas[i].charAt(0).toUpperCase() + array_frutas[i].slice(1).toLowerCase()
    //para guardarlo en la nueva cadena:
    //array_frutas_may[i] = fruta_ok //un metodo
    array_frutas_may.push(fruta_ok) //el metodo que mas se utiliza
}
console.log(array_frutas_may)