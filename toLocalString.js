// Convierte un array en cadena de texto usando la configuración regional del usuario. Útil para mostrar números, fechas o monedas según la localidad.

const precios = [1000, 2000, 4000];

let nuevoArray = precios.map(e => e.toLocaleString(`es-CR`, {style: `currency`, currency: `CRC`}));

console.log(nuevoArray);

// devuelve: [ '₡1 000,00', '₡2 000,00', '₡4 000,00' ]