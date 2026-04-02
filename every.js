//Sirve para evaluar si todos los datos cumplen con todos las condiciones

//Si todos cumplen, devuelve true
//Si el array está vacio, devuelve true

//Si alguno no cumple las condiciones, devuelve false

const array = [2, 4, 5, 6, 8];

//Como evaluar cada elemento, necesita una función flecha : array.every(e=> e<10 )

let resultado = array.every(e => e < 10 );

// Si todos los elementos son menores a 10 = true
//si alguno de los elemenos no es menor a 10 = false

console.log(resultado);

// devuelve true 