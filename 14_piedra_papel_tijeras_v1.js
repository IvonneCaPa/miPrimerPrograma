//es lo más basico, por que primero nos enfocamos en que el juego funcione

let menu = `
OPCIONES DEL JUEGO
==================
Elige el número correspondiente a 
la jugada que prefieres

1. Piedra
2. papel
3. Tijeras

`

let nombre_jugador = "Asimov"
let jugada_humano = 1

if (jugada_humano == 1){
    console.log(`Piedra <--- es la jugada de ${nombre_jugador}`);
} else if (jugada_humano == 2){
    console.log(`Papel <--- es la jugada de ${nombre_jugador}`);
} else if (jugada_humano == 3){
    console.log(`Tijeras <--- es la jugada de ${nombre_jugador}`);
}

fecha = "2023/11/09"
console.log(fecha);

//La jugada del PC
let jugada_pc = getRandomInt(1, 4)
if (jugada_pc == 1){
    console.log(`Piedra <--- es la jugada del PC`);
} else if(jugada_pc == 2){
    console.log(`Papel <--- es la jugada del PC`);
} else {
    console.log(`Tijeras <--- es la jugada del PC`);    
}


// El jugador (jugada_humana) ya ha escogido, el ordenador con la funcion getRandomInt (jugada_pc)

// La partida
if(jugada_humano == jugada_pc){
    console.log(`Habéis empatado`);
} else if ((jugada_humano == 1 && jugada_pc == 3) 
|| (jugada_humano == 2 && jugada_pc == 1) 
|| (jugada_humano == 3 && jugada_pc == 2)){
    console.log(`Has ganado ${nombre_jugador}`);
} else {
    console.log(`Has perdido ${nombre_jugador}`);
}


// Notesé que también en este caso `min` será incluido y `max` excluid
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);  //return es una palabra reservada para devolver el valor
  }

  