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
// nombre = nombre.toLowerCase()   //primero pasamos todo a minusculas
// nombre = nombre[0].toUpperCase() + nombre.toLowerCase() 

//ponemos la primera posicion en mayuscula, pero salen dos f, por que concatenamos
//console.log(nombre)

// Usamos CharAt() para obtener un valor especifico de una posicion
console.log(nombre.charAt(0))

//Otra forma para obtener un valor especifico de una posicion
console.log(nombre[2])

//Usamos el método slice() para obtener una parte de una cadena
console.log(nombre.slice(4))

//Usamos estos métodos para solucionar el problema de las 2 F
console.log(nombre.charAt(0).toUpperCase()) //ponemos la inicial en mayuscula

console.log(nombre.slice(1).toLowerCase()) //El resto de nombre en minuscula

console.log((nombre.charAt(0).toUpperCase()) + (nombre.slice(1).toLowerCase())) //todo junto

let nombreCompleto = "    Perez Gonzalez, Maria  "

//Para quitar espacios del principio y del final con el metodo trim()
let nombreSinEspacios = nombreCompleto.trim()
console.log(nombreSinEspacios)

//quito la coma del string
let nombreArreglado = nombreSinEspacios.split(", ")
nombreArreglado = nombreArreglado[1]+" "+nombreArreglado[0]
console.log(nombreArreglado)

