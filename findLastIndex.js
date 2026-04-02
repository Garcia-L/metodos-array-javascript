//Sirve para buscar la posicion del ultimo elemento que cumple con una condicion o evaluacion

const array = [5, 10, 15, 20, 25];

let resultado = array.findLastIndex(e => e < 10 )

console.info(resultado) 

// devuelve = la posicion 0

// Porque 5 es el ultimo y unico 