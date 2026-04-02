// Devuelve el iterador predeterminado del array, permitiendo recorrerlo con for...of, el operador ... o métodos que usen iteración.

const array = ['uva', 'pera', 'coco'];

const DatosSeparados = array[Symbol.iterator]();


for (const e of DatosSeparados) {
    console.log(e)
}

// Devuelve: 
// uva
// pera
// coco