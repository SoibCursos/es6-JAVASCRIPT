//Tres formas de decdlarar variables
var producto = "Monitor de 23 pulgadas";

console.log(producto);

producto = "Teclado USB";

console.log(typeof producto);

//Tipo de datos dinámico

producto=12;

console.log(typeof producto);

var disponible = true;

console.log(typeof disponible);
console.log(disponible);

var suma=34;

console.log("La suma vale: "+suma);

console.log(suma+3);
console.log(suma+3+"6");
console.log("6"+suma+3);

//Inicializar variables seguidas...

var cosas;
cosas="Cables, placas, alicates...";

var categorias="deportes", marca="Nike", indice=3;

//Reglas para nombrar variables
//Un identificador o palabra clave no puede ir seguido de una palabra clave
//las variables solo pueden empezar por letras o por un guión bajo
//Cuando usemos palabras compuestas la segunda es conveniente que empiece por mayusculas ej. "weekDay"
//Por convenio en Javascript se suele usar Estilos para nombrar una variable de más de una palabra, diferencia entre mayusculas y minusculas
//Ojo! JS es caseSensitive. Nunca usar para iniciar una varible que la primera letra sea mayusculas, eso totalmente prohibido

var precio=23; //Declaro e inicializo la variable
precio=3; //Reasignación de la variable
