// Elimina y devuelve el último elemento de un array

const array = [`azul`, `rojo`, `verde`];

//en este caso sacamos la palabra "verde" y la guardamos en la variable
let resultado = array.pop();

// mostrar la variable con el dato fuera del array
console.log(resultado);
// devuelve; verde

// mostrat el array sin el dato "verde", JSON.stringify muestra los datos en string ya que son array de datos
console.log(JSON.stringify(array));
// devuelve: ["azul","rojo"]