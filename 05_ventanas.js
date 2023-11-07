// Necesitan HTML

// Aviso, se detiene hasta que aceptemos
alert("soy un alert!!")

// Confirmación
let respuesta = confirm("¿Soy un confirm?") //como hay respuesta, lo mejor es guardarlo
let codigo = "<p style='color:red'>"+respuesta+"</p>"

document.getElementById("ventana").innerHTML = codigo

// Es una pregunta donde la respuesta es variable y me lo muestra en pantalla
let nombre = prompt("¿como te llamas?")
alert(`Te llamas ${nombre}`)