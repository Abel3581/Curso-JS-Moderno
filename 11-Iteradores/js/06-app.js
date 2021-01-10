// Bueno veamos otros iteradores que existen en JavaScript, previamente ya habiamos visto forEach y Map, 
// vamos a verlos en este video y sus diferencias...

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Recorrer por un Foreach
pendientes.forEach( (pendiente, index) =>  {
    console.log(`${index} : ${pendiente}`);
});

// Recuerda que como es una sola linea, la llave es opcional...

// Recorrer arreglo de objetos
const carrito = [
    { nombre: "Televisor", precio: 600 },
    { nombre: "celular", precio: 1000 },  
    { nombre:"plancha", precio: 600 },
   
];

// carrito.forEach( producto =>  {
//     console.log(`Agregaste ${producto}`);
// });

// Lo mismo aplica para los maps, la sintaxis es la misma, solo recuerda, el map te crea un nuevo arreglo, si solo deseas recorrer los elementos utiliza el Foreach, si requieres crear un nuevo arreglo, sin duda el map sera mejor...

// map

const arreglo = carrito.forEach( producto => producto.nombre);
const nuevoArreglo = carrito.map( (producto) => producto.nombre);


console.log(arreglo);
console.log(nuevoArreglo);


