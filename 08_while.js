//WHILE : Mientras haya una condicional, ejecuta el siguiente código.

let llueve = true   //llueve es verdadero

while(llueve){
    for(let i = 1; i <= 5; i++){
        console.log(`Hoy es dia ${i} y está lloviendo`)
        if(i == 5){
            console.log(`Ya ha dejado de llover`)
            llueve = false
        }
    }
}

// otra variante es do = hacer
// do{
//     codigo
// } while(condicion){
//     codigo
// }

let frutas = ["platano", "naranja", "limon", "mango"]
for (let i=0; i < frutas.length; i++){
    console.log(`${i +1}. ${frutas[i]}`)
}
let i = 0
while (i < frutas.length){
    console.log(`${i +1}. ${frutas[i]}`)
    i++
}


