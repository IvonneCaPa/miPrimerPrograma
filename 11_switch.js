// Para los casos que tengamos multiples opciones, evaluar si se cumple la condición,

let dia_semana = "lunes"
let mensaje = ""

// switch(dia_semana) {
//     case "lunes": 
//         mensaje = "hoy es laborable"
//         break;
//     case "martes":
//         mensaje = "hoy es laborable"
//         break
//     case "miercoles":
//         mensaje = "hoy es laborable"
//         break
//     case "jueves":
//         mensaje = "hoy es laborable"
//         break
//     case "viernes":
//         mensaje = "hoy es laborable"
//         break
//     default :
//         mensaje = "hoy no es laborable"

// }

// es otra forma de hacer lo de arriba, por que la respuesta es la misma en cada caso
switch(dia_semana) {
    case "lunes": 
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        mensaje = "hoy es laborable"
        break
    default :
        mensaje = "hoy es Fin de Semana"

}

console.log(mensaje)
// document.getElementById("js_3").innerText = mensaje