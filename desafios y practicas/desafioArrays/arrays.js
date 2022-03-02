const productos = [{
    id:1,
    nombre: "CAMISETAS",
    cantidad: "12",
    precio: "300"
},
{
    id:2,
    nombre: "SHORTS",
    cantidad: "5",
    precio: "250"
},
{
    id:3,
    nombre: "CAMPERAS",
    cantidad: "8",
    precio: "400"
},
{
    id:4,
    nombre: "PANTALONES",
    cantidad: "8",
    precio: "400"
},
];
const prods = [ ]
let productoIngresado

const search = () => {
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
                        <li>Precio : ${p.precio}</li>
                        </ul>
                        `)
        })
    } else {
        const mapeo = document.write(`<h1> Hasta luego! </h1>`)
    }
}

search()