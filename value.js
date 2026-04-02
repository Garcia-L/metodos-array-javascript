// Devuelve un iterador o recorriedo de los valores del array.

const array = ['uva', 'pera', 'coco'];

console.log(...array.values());

// Devuelve: uva pera coco

// En este caso se usa ... o spread para transformar los objetos
// Pero, podemos usar for, [Symbol.iterator]() y Array.from, ya que, en el iterador, recorremos un dato a la vez

for (const e of array.values()) {

    console.log(e);
}
// devuelve: 
// uva
// pera
// coco


// Tambien 

console.log(Array.from(array.values()));

// Devuelve: [ 'uva', 'pera', 'coco' ]