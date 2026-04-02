//Sirve para recorrer el array, devuelve su posición y valor = (iterador)

const array = ['a', 'b', 'c'];

let nuevoArray = array.entries();

//Ahora recorremos cada uno con for, sino, devuelve: Object [Array Iterator] {}

for (const [posicion, valor] of nuevoArray) {
    
    console.log(posicion, valor);
    // lo que devuelve es: 0 a, 1 b, 2 c
}



// Tambien podemos hacerlo más rápido

const array1 = ['ma', 'me', 'mi'];

// Los 3 puntos, crea un nuevo array = spread = extension
console.log( [ ...array1.entries() ] );

// lo que devuelve es: [ [ 0, 'ma' ], [ 1, 'me' ], [ 2, 'mi' ] ]