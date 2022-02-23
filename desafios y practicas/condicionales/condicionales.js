console.log("empezando con condicionales");

// 1.- Pedir la edad
//2.-Comparar la edad con diferentes limites
//3.-Imprimir un mensaje respecto a cada condicion

let edad = prompt("Ingrese su edad")
if (edad =="") {
    alert("No ingresaste tu edad")
}

if (edad < 20) {
    console.log("Todavia no tienes 20");
} else if (edad < 30) {
    console.log("Estas en los 20");
}

else {
    console.log("Ya tienes 20 o mas");
}
