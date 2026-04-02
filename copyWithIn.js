//sirve para sustituye una porción de datos de un array en el MISMO array

//IMPORTANTE: la sustitución se hace con los valores de las coordenadas que uno indique

//Sintaxis: variable.copyWithIn(objetivo, inicio, final (no toma en cuenta este valor))

const array = [10, 20, 30, 40, 50];

//array.copyWithin(posicion donde se inserta, donde se inicia la copia, donde se finaliza la copia);
array.copyWithin(1, 3, 4);

console.log(array);

//Devuelve: [ 10, 40, 50, 40, 50 ]

//Se agrego 40 y 50, en la posición 1 en adelante