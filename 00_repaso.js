// ========= a tener en cuenta ============
// importante JS es sensible a las mayusculas y minusculas
let ana = "minusculas"
let Ana = "Mayusculas"

console.log(ana + " " + Ana);

//Las lee como variables diferentes

// el punto y coma se utiliza para unir dos sentencias
let prueba1 = "a"; let prueba2 ="b"
console.log(prueba1 + prueba2);

// ***********  VARIABLES  ************
// La palabra reservada let c rea una variavle con el 
// sigono = le damos un valor
let color // crea la variable color
color = "verde"  // se le asigna verde

let color2 = "verde" //otro forma de asignar la variable color

let uno, dos, tres  //Se pueden declarar varias variables

//tambien existe la posibilidad e crear la variable con otra palabra clave
var ciudad = "Cornella"
var ciudad = "Esplugas" //no se recomienda por que puedes generar un codigo
//Ya que deja sobreescribir la variable 

let comida = "Pizza"

//el bucle for nos permite iterar (pasar de un valor a otro)
//Para ello se genera una condición posible, donde empieza, donde termina y 
for (let i = 0; i < comida.length; i++){
    console.log(comida[i]);
}

// Hay variables de diversos tipos, por ejemplo texto, numero, booleano, etc.

let texto = "Es viernes" //tipo String
let numero = 10   //tipo Number
let decimal = 10.5  //Es decimal, pero se trabaja como un numero
let booleano = true  //tipo Boolean

//Al ser una variable, puede variar, 
numero += 2 //podemos incrementar una variable asi misma
console.log(numero);

// Con los string igual

texto += " y el cuerpo lo sabe"  //Con texto se le añade al final

//Hay tres tipos de ventanas emergentes
// alert(mensaje de tipo string) //suele ser a nivel informativo
// let confirmacion = confirm(mensaje que devuelve una respuesta booleana)
// let pregunta = prompt(mensaje)  //permite recibir una respuesta por teclado


// ***********  OPERACIONES  ************
// =
// ==

// **********  ESTRUCTURA DE CONTROL  ***********

// IF: 
// // if (si pasa la condicion) {
//     hago algo
// } else {si no pasa la condicion hago otra cosa (no es obligatorio)}

let frio = false;
if (frio){
    console.log("Es frio");
} else {
    console.log("No es frio");
}

// Else if 
let dia = "viernes"
if(dia == "lunes"){
    console.log("Es lunes");
} else if (dia == "martes"){
    console.log("Es martes");
} else{
    console.log("No es lunes ni martes");
}
// se puede poner de manera opcional un else, cubrira todas las condiciones que no se cumplen

// SWITCH

// while Ejecuta algo hasta que le digamos que pare,

let contador = 0;
while (contador < 10){
    console.log(contador);
    contador++;
}

//Cuando queremos que se pare usamos break

adajkd

// do while

let contador2 = 0;
do {
    console.log(contador2);
    contador2++;
} while (contador2 < 10);

// FOR

for (let i = 0; i < 10; i++){
    console.log(i);
}

// FOR IN

for (let i in comida){
    console.log(comida[i]);
}

// FOR OF

for (let i of comida){
    console.log(i);
}

// ***********  FUNCIONES  ************


