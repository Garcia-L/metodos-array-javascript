//Sirve para transformar los datos con MAP y el flat limpia para que sea mas legible

const array = [1, 2, 3, 4]

console.log(array.flatMap(e => [ [e * 2 ] ]));

// devuelve: [ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]

// Sin en flat devolveria = [ [ [ 2 ] ], [ [ 4 ] ], [ [ 6 ] ], [ [ 8 ] ] ]