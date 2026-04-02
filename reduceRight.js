// Aplica una función simultáneamente contra un acumulador y cada elemento de un array (de derecha a izquierda) para reducirlo a un único valor.

const nums = ['hola', 'mundo'];

let palabra = nums.reduceRight( (previo, actual) => previo + " " + actual);

console.log(palabra);

// Devuelve: mundo hola 

