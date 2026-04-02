//Sirve para filtrar y sacar valores de dato de un array

const frutas = ['coco', 'piña', 'fresa', 'naranja'];

// evaluaremos el dato que tenga la vocal 'o'

let filtracion = frutas.filter((e) => e.includes('o') )

console.log(filtracion);
//devuelve la fruta: coco



// ---------------------------------------------------------
// Aparte de includes se puede usar 
// ---------------------------------------------------------

// includes() : valor que incluye letra o numero
// StarWith() : valor que inicio con
// endsWith() : valor que termina con
// length() : valor con cantidad de letras
// toLoverCase() : valor en minusculas
// toUpperCase() : valor en mayusculas
// indexOf() : posición del valor
// match() : evaluar con criterios de i, g, m
//     i: valora mayusculas y minusculas
//     g: busca todas las coincidencias
//     m: hace que ^ y $ funcione linea por linea
// trim(): ignora los espacios
// charAt(): devuelve una letra o valor segun posicion que indiquemos
