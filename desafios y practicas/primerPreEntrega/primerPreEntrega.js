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
const prods = [ ]
let productoIngresado

const search = () => {
    alert("Stock: Camisetas, Shorts, Camperas, Pantalones")
    let filtro = prompt("¿Que desea comprar?  Para salir presione listo").toUpperCase();
    if (filtro === "listo") { } else {
        productoIngresado = productos.find(element => element.nombre === filtro)
        while (!productoIngresado) {
            filtro = prompt("¿Que desea comprar? , para salir presione listo").toUpperCase();
            if (filtro === "listo") break
            productoIngresado = productos.find(element => element.nombre === filtro) 
        }
        if (productoIngresado) prods.push(productoIngresado)
    }
    if (prods.length > 0){
        const mapeo = prods.map(p =>{ 
            document.write(`
                        <ul>
                        <li>Nombre: ${p.nombre}</li> 
                        <li>Stock : ${p.cantidad}</li>
                        <li>Precio : ${p.precio}</li><li> <img src="${p.imagen}"></li>
                        </ul>
                        `)
        })
    } else {
        const mapeo = document.write(`<h1> Hasta luego! </h1>`)
    }
}

search()