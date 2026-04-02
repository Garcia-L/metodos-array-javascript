// devuelve una copia de una parte del array dentro de un nuevo array 

const array = [`Luis`, `Juan`, `Maria`, `Cecilia`];


// vamos a cortar de Juan hasta Cecilia, pero Cecilia no cuenta
let nuevoArray = array.slice(1,3);

console.log(nuevoArray);

// devuelve: [ 'Juan', 'Maria' ]