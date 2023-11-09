let fecha = "2023/11/08"

//quiero un mensaje que diga: Hoy es 8 del 11 del 2023

//primero parto la información que recibo, con split lo corto con el elemento que quiera en este caso es /
let fecha1 = fecha.split("/")
console.log(fecha1)

//Ahora lo que hago es concatenarlo con un string
let fechaOK = "hoy es " + fecha1[2] + " del " + fecha1[1] + " del " + fecha1[0]
console.log(fechaOK)

//Para ponerlo en un array
let array_fecha = fecha.split("/")
console.log(array_fecha)
console.log("hoy es " + fecha1[2] + " del " + fecha1[1] + " del " + fecha1[0])

console.log(`hoy es ${fecha1[2]} del ${fecha1[1]} del ${fecha1[0]}`)

//podria en vez de fechaOK, volver a asignar fecha1, pero para aclararme

