
// En este video veremos for of...

// For of no es como un for tradicional que ejecuta una pieza de código mientras una condición sea verdadera, este ejecuta mientras haya elementos por iterrar como puede ser un arreglo y otros llamados Maps y Sets que veremos más adelante...

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for (let pendiente of pendientes) {
    console.log(pendiente);
}

// Sin duda una forma más sencilla que un foreach y un for no?



// Recorrer arreglo de objetos
const carrito = [
    {id: 1, producto: 'Libro' },
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Disco'}
];

for (let producto of carrito) {
    console.log(producto);
}
