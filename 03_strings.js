// STRINGS o cadena de texto

let ejem1 = "Hola" //puede ser con comillas dobles o comillas simples
let ejem3 = `hola` // aportación del 2014

let frase1 = "Ella me dijo  'hola'" // va muy bien para cuando en el texto que queremos lleva comillas
console.log(frase1);

let nombre = "Sara"
let frase2 = 'Sara me dijo "hola"'
let frase3 = `${nombre} me dijo "hola"`	
console.log(frase3)

let frase4 = `${nombre.toUpperCase()} me dijo "hola"`  //por si la variables se obtiene de fuera
console.log(frase4)

console.log("el texto tiene", nombre.length, `caracteres`)
console.log(`el texto tiene ${nombre.length} caracteres`) 


let saludo1 = "buenos"
let saludo2 = "días"
let SaludoFinal = saludo1 + saludo2 //concatena 
console.log(SaludoFinal)

let SaludoFinal2 = saludo1 + " " + saludo2 //concatena 
console.log(SaludoFinal2)

// en una cadena se empieza a asignar la posición del primer elemento en 0. Ejemplo

nombre = "bill"
console.log(nombre[0]);    //si quiero acceder a la inicial, es decir el primer valor de la cadena

//ejemplo de como organizar una cadena. Vamos a poner el nombre correcto
nombre ="feDeriCO"
nombre = nombre.toLowerCase()   //primero pasamos todo a minusculas
nombre = nombre[0].toUpperCase() + nombre.toLowerCase() //ponemos la primera posicion en mayuscula, pero salen dos f


console.log(nombre)
