//Sirve para buscar en un array y devuelve el primer dato que cumpla con las condiciones

const array = [5, 15, 20, 25, 30];

let resultado = array.find(e => e > 10)

console.log(resultado);

// Devuelve el primer valor que sea mayor a 10

//En este caso devuelve 15, ya que, fue el primer valor mayor a 10 que se encontro, los demás se ignoran, una vez encontrada el primer valor
