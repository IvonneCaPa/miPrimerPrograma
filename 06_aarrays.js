// Un array es una cadena de caracteres que contiene una lista de elementos
// Se crea como una variable
//Pueden tener elementos repetidos

let nombre = "Pep"
console.log(typeof nombre)          //me dicec de que clase es
console.log(nombre.length)         //me dicec el tamaño de la cadena
console.log(nombre.charAt(0))      //me dice que elemento esta en la posición 0

let array1 = ["Ana", "Sara", "John"]     //los elementos de la listas se separan con comas
console.log(typeof array1)              //Con typeof puedo saber que clase es la variable
console.log(array1.length)              //Con length puedo saber el tamaño de la lista

let array_frutas =["mango", "Pera", "Cereza"]
console.log(array_frutas[1])

// En un array puedo meter una variable
let platano = "cebolla"
let array_frut =["mango", "Pera", "cereza", platano, "castaña"]
console.log(array_frut[2])

//Para saber cual es el ultimo elemento de la lista, tantos como hay menos 1
console.log(array_frut[array_frut.length - 1])

//Para cambiar el valor, accedo al array en la posicion que quiero cambiar y reasigno el nuevo valor
array_frut[2] = "naranja"
console.log(array_frut)

//Para poder añadir un elemento al array se usa el metodo push()
array_frut.push("limon")
console.log(array_frut)

//Para quitar elementos de un array se usa el metodo pop()
array_frut.pop()
console.log(array_frut)

//Lo quita pero si lo necesitamos lo puedo guardar
let ultima_fruta = array_frut.pop()
console.log(ultima_fruta)

//Eliminamos el primer elemento con shift()
array_frut.shift()
console.log(array_frut)

//Y se puede guardar
let primera_fruta = array_frut.shift()
console.log(primera_fruta)

//Para juntar 2 array en uno usamos el metodo concat()
let array_frutas_fall = ["mango", "Pera", "Cereza", platano, "castaña"]
let array_frutas_sum = ["melocoton", "melon", "sandia"]

let array_frutas_final = array_frutas_fall.concat(array_frutas_sum)
console.log(array_frutas_final)

array_frutas_fall.push(array_frutas_sum)
console.log(array_frutas_fall)

//Para unificar
let array_unificado = array_frutas_fall.flat()
console.log(array_unificado)


//Para acceder a todos los elementos y hacer algo con ellos usamos un bucles

//En un array tambien puede ir un array

