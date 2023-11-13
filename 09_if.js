// Es una estructura de control, compuesta de varias secuencias
/*
    IF
    IF / ELSE
    IF / ELSE IF / ELSE
*/

// Es un condicional: evalua una condición y si es verdadero, ejecuta el bloque de código,

let llueve = false
let loQueVoyHacer = ""

//para poder verficar el codigo con if, es necesario un html
if(llueve) {
    loQueVoyHacer = "Necesito un paraguas"
} else {
    loQueVoyHacer = "Me voy de paseo"
}
document.getElementById("js_1").innerText = loQueVoyHacer

// con getElementById busca el elemento, lo encuentra y hace lo que se le pide, para no hacerlo 
// 2 veces se crea una variable llamada mensaje.

// Se puede hacer un IF sin ELSE el ELSE si que necesita un IF primero

let dia_semana = "miercoles"
let mensaje = ""

if(dia_semana == "lunes") {
    mensaje = `Hoy es ${dia_semana}`    //con el ${dia_semana} significa que varia, no es constante
} else if(dia_semana == "martes") {
    mensaje =  `Hoy es ${dia_semana}`
} else {
    mensaje = "Hoy no es ni lunes ni martes"
}
document.getElementById("js_2").innerText = mensaje

// si queremos repetir varias veces, se usa switch