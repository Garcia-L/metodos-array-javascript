// Crea una copia del array con cambios (agregar, quitar o reemplazar elementos) sin modificar el original. Es la versión inmutable de splice().

const array = ['uva', 'pera', 'coco'];

const copiaArray = array.toSpliced(1, 0, 'mango');

console.log(copiaArray);

// Devuelve: [ 'uva', 'mango', 'pera', 'coco' ]