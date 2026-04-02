// Reduce un array a un solo valor aplicando una función acumuladora.

const nums = [1, 2, 3, 4];

// reduce ( (valor previo, valor actual) => valor previo + valor actual, inicializacion de variable

let suma = nums.reduce( (acumulado, numero) => acumulado + numero, 2);

console.log(suma)

// devuelve: 12

// Tambien se puede hacer con string, acumulando en el valor previo una union de palabras, hasta formar una frase