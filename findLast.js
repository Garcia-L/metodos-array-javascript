//Sirve para buscar un datos, al igual que find(), pero inicia buscando al reves, es decir, la busca es al reves, del ultimo dato hasta el primero

const array = [5, 10, 15, 20, 25];

console.log(array.findLast(e => e < 15));

// Nos devuelve el valor que sea menor a 15, en este caso es el 10

