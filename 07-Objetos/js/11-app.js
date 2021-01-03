// object literal

// const producto = {
//     nombre: 'Monitor de 20\ " ',
//     precio: 3000,
//     disponible: true,
// }

// object constructor

function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor', 500);
console.log(producto2);

const producto3 = new Producto('Televicion', 1000);
console.log(producto3);