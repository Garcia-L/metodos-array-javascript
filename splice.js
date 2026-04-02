// cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

const array = ['Enero', 'Marzo', 'Abril'];

// splice( posicion de inicio, elementos a borrar, elemento por agregar)

console.log(array);

array.splice(1, 'Febrero')
// Si no borramos nada, devuelve: [ 'Enero', 'Febrero', 'Marzo', 'Abril' ]

array.splice(1, 2, 'Febrero')
// Pero si agregamos que borre 2 elemento, devuelve: [ 'Enero', 'Febrero' ]