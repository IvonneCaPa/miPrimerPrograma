//Revisamos los posibles errores de introducción de datos del usuario en el menu


// Jugada Humana

let mensaje_inicial = `
### Bienvenido a nuestro juego ### 

Yo me llamo PC, Dime como te llamas?
`
let nombre_jugador = prompt(mensaje_inicial)

let menu = `
OPCIONES DEL JUEGO
==================
Hola ${nombre_jugador} elige el número correspondiente 
a la jugada que prefieres

1. Piedra
2. papel
3. Tijeras
`

let jugada_humano = prompt(menu)
let texto_resolucion_partida = ""


// Si el humano escoge mal las opciones
if ((jugada_humano != 1) || (jugada_humano != 2) || (jugada_humano != 3)) {
    alert(`${nombre_jugador} Has perdido la partida\n`)

} else {
    if (jugada_humano == 1){
        texto_resolucion_partida += `${nombre_jugador} Has escogido Piedra\n`;
    } else if (jugada_humano == 2){
        texto_resolucion_partida += `${nombre_jugador} Has escogido Papel\n`;
    } else if (jugada_humano == 3){
        texto_resolucion_partida += `${nombre_jugador} Has escogido Tijera\n`;
    } else {
        texto_resolucion_partida += `${nombre_jugador} Has perdido la partida\n`;
    }

    //La jugada del PC
    let jugada_pc = getRandomInt(1, 4)
    if (jugada_pc == 1){
        texto_resolucion_partida += ` Y el PC ha escogido Piedra\n`;
    } else if(jugada_pc == 2){
        texto_resolucion_partida += ` Y el PC ha escogido Papel\n`;
    } else {
        texto_resolucion_partida += ` Y el PC ha escogido Tijera\n`;
    }

    // La partida
    if(jugada_humano == jugada_pc){
        texto_resolucion_partida += `Habéis empatado`;
    } else if ((jugada_humano == 1 && jugada_pc == 3) 
    || (jugada_humano == 2 && jugada_pc == 1) 
    || (jugada_humano == 3 && jugada_pc == 2)){
        texto_resolucion_partida += `Has ganado ${nombre_jugador}`;
    } else {
        texto_resolucion_partida +=`Has perdido ${nombre_jugador}`;
    }

    alert(texto_resolucion_partida);
}





// Notesé que también en este caso `min` será incluido y `max` excluid
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);  //return es una palabra reservada para devolver el valor
}

  