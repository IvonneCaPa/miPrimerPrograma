// "VARIABLES"

// NOMBRES DE LAS VARIABLES: Han de empezar por leta o subgion sólo en casos especiales
// No pueden contener espacios en blanco, guiones (-), ni simbolos como las ñ, ç, ..
// Formas de definir una varible.
let num1 = 1

//Forma de definir una varible.
let num2    //esto es la declaracion de una varible.
num2 = 2    // esto es una asignacion de una varible.

//La segunda forma, permite crearlas en bloque,
let tres, cuatro, total
tres = 3
cuatro = 4
total = tres + cuatro

// No se debe crear 2 veces una variable. ej. 
let texto = "Hola"
//let texto  // sale error porque ya existe una variable con el mismo nombre.
texto = "adios" // se puede cambiar el valor

//var texto //sale error porque tiene el mismo nombre de una variable que ya existe.

var texto2 //otra forma de definir una variable.

//Constante, se declara con const y no se puede modificarla.
const pi = 3.1415926535897932
//pi = 653

console.log(pi)

// Cada variable que se declara tiene determinado tipo

console.log(typeof pi)

/* ASIGNACION: Para asignar un valor se utiliza el signo = */

// Para facilitar la lectura es recomendable dejar un espacio entre los simbolos


// JavaScript diferencia Mayusculas y Minusculas ejemplo
let pais = "Andorra"
let Pais = "Andorra"
let PAIS = "Andorra"
// Para JavaScript son 3 variables diferentes, la opción es usar siempre sólo minusculas, las mayusculas
// se utilizan sólo para constantes o si la variable son mas de una palabra para no usar el espacio
let miNombreEs = "Ivonne"


