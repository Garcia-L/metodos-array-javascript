//Sirve para sustituir el valor de un dato por uno especifico

const array = [1, 2, 3, 4, 5];

// Muta o cambia el array original

// valor que agregara, posicion de incicio para pegar, posicion donde finaliza 

const hola = array.fill(10, 1, 3);

console.log(array);

// devuelve: [ 1, 10, 10, 4, 5 ]