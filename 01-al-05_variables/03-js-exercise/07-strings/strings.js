//comillas dobles
let producto = "Monitor de '23'pilgadas";
producto = 'Monitor de "23" pulgadas';
// Escapar caracteres. n es salto de línea y t es tabulado.
/* producto="Mon\\itor de \"23\" pul\ngad\tas" */
producto =
  'Mon\\itor de "23" pul\ngad\tas'; /*OJO! que el Prettier me lo arregla*/

// saber la longitud de un string
console.log(producto.length);
