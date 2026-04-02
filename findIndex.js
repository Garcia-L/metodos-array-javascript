//Sirve para buscar datos en un array (usa forEach), y devuelve la posición en donde se encontro el primer valor que cumple la condiciones solicitada

const array = [5, 10, 15, 20, 25];

console.log(array.findIndex(e => e > 20));

// En este caso le solicitamos un valor que sea mayor a 20

// Devolvera, la posicion 4 ----------- ya que este es el 25