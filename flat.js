//Sirve para limpiar el formato de un array, por ejemplo: [n [n [n ]]] ya que, los parentisis estan desordenados

const array = [1, [2, [3]]];

console.log(array.flat(2)) //El 2 corresponde a la posicion donde se limpiara

// devuelve: [1, 2, 3]