console.log("Calculo de promedios");



var notaIngles = prompt("Ingrese la nota de Ingles");

var notaMatematica = prompt("Ingrese la nota de Matematicas");

var notaFisica = prompt("Ingrese la nota de Fisica");

var notaQuimica = prompt("Ingrese la nota de Quimica");

var notaBiologia = prompt("Ingrese la nota Biologia");

var notaHistoria = prompt("Ingrese la nota Historia");

var promedio = (parseInt (notaIngles) + parseInt (notaMatematica) + parseInt (notaFisica) + parseInt (notaQuimica) + parseInt (notaHistoria) + parseInt (notaBiologia)) /6;
    alert("Tu promedio es: " + promedio) 