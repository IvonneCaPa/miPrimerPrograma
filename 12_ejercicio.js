// Primero pedimos la edad
let edad = prompt("¿Qué edad tienes?")

//El prompt devuelve un dato de tipo string, por suerte en JavaScript no importa en java hacer un casting

// En JavaScript se concatena el dato en vez de sumar si introduzco 12 el resultado es 1210
// alert(edad +10) 

// Hago un alert para saber que clase de tipo de dato es
//alert(typeof edad)

// Si el usuario no responde la edad o introduce texto, se muestra un mensaje de error, si no se evalua
// Se usa el operador lógico o || por que hay dos o mas opciones que sea null o vacio
if ((edad == null) || (edad == "") || (isNaN(edad))) {
    alert("Debes escribir tu edad")

//Si el usuario ha introducido correctamente la edad, se muestra el mensaje
} else if (edad < 18) {
        alert(`Como tienes ${edad} años\n eres menor de edad`) // se utiliza \n para hacer el salto de linea
    } else {
        alert(`Como tienes ${edad} años
    eres mayor de edad`) // este sistema sólo  funciona con las comillas `` con las otras no
    }
    
// hay otro problema y es que devuelve un string pero en realidad el if es numerico

