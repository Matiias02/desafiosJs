console.log("Ejemplo condicionales 2 tarea de clase");

//pedir ingreso
//si es menor que 100 entonces no cobra IVA
// mayor que 100 pero menor que 200 restar el 21% de IVA
//si es mayor que 200 restar 35% de IVA
//regrese la ganancia neta

let ingreso = prompt ("Digite su ingreso")

if ( ingreso < 100 ) {
    alert("Su ganancia neta es: " + ingreso)
}else{
    let gananciaNeta = ingreso * 0.79
    alert("Su ganancia neta es: " + ingreso)
}