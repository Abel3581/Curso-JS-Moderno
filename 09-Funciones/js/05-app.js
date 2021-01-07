// Funciones que toman parametros y argumentos...
function sumar (a, b) {                   // a y b son parametros
    console.log(a + b);                   
}
sumar(10, 10);                          // 10 y 10 son argumentos


// Nuestra primera función no tiene nada de emocionante, es demasiado simple, para que tus funciones puedan ser más versatiles e inteligentes deberán utilizar parametros y argumentos

function saludar (nombre, apellido) {  // nombre y apellido son parametros, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
    console.log(` Hola mi nombre es: ${nombre} ${apellido} `);
}

saludar('Abel', 'Acevedo');// Pablo y De la torre son argumentos, son los valores reales...
saludar();