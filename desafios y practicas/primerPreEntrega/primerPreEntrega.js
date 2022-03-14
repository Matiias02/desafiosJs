const productos = [{
    id:1,
    nombre: "CAMISETAS",
    imagen: "imagenes/laamistad.png",
    cantidad: 1,
    precio: 300
},
{
    id:2,
    nombre: "SHORTS",
    imagen: "imagenes/lacoronilla.jpeg",
    cantidad: 1,
    precio: 250
},
{
    id:3,
    nombre: "CAMPERAS",
    imagen: "imagenes/equipwanderers.jpeg",
    cantidad: 1,
    precio: 400
},
{
    id:4,
    nombre: "PANTALONES",
    imagen: "imagenes/cartoneros.jpg",
    cantidad: 1,
    precio: 400
},
];

let producto = prompt("¿que producto desea comprar? Camisetas, Pantalones, Shorts, Camperas");
let camisetas = 200;
let shorts = 140;
let camperas = 1000;
let pantalones = 50; 
let tome = (" Gracias!, aqui esta su compra")


while(producto != ""){
	switch(producto.toUpperCase()){
		case "CAMISETAS":
			let cantidad = prompt("¿cuantas desea comprar?")
			const pTotal1 = ("el precio total es de: " + camisetas*cantidad + "$")
			alert(pTotal1)
			alert(tome)
			producto = prompt("¿que producto desea comprar? Camisetas, Pantalones, Shorts, Camperas")
		break
		case "SHORTS":
			let cantidad2 = prompt("¿cuantos desea comprar?")
			const pTotal2 = ("el precio total es de: " + shorts*cantidad2 + "$")
			alert(pTotal2)
			alert(tome)
			producto = prompt("¿que producto desea comprar? Camisetas, Pantalones, Shorts, Camperas")
		break
		case "CAMPERAS":
			let cantidad3 = prompt("¿cuantas desea comprar?")
			const pTotal3 = ("el precio total es de: " + camperas*cantidad3 + "$")
			alert(pTotal3)
			alert(tome)
			producto = prompt("¿que producto desea comprar? Camisetas, Pantalones, Shorts, Camperas")
		break
		case "PANTALONES":
			let cantidad4 = prompt("¿cuantos desea comprar?")
			const pTotal4 = ("el precio total es de: " + pantalones*cantidad4 + "$")
			alert(pTotal4)
			alert(tome)
			producto = prompt("¿que producto desea comprar? Camisetas, Pantalones, Shorts, Camperas")
		break
		default:
			alert("Ese producto no esta a la venta")
			producto = prompt("¿que producto desea comprar? Camisetas, Pantalones, Shorts, Camperas")
	}
}

let iva = producto.map(el => el.precio += 21)