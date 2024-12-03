//Vamos a hacer la típica función SUMAR
//Declaramos una función

function sumar() {
  console.log(2 + 3);
}
//Para usar/ejecutar/llamar la función hacemos
sumar();

function sumaParametro(n) {
  console.log(n + 3);
}
//Para usar/ejecutar/llamar la función hacemos
sumaParametro(3);
sumaParametro(6);
sumaParametro(7);

function sumaParam(num1, num2) {
  console.log(num1 + num2);
}
sumaParam(3, 4);
sumaParam(6, 6);
sumaParam(7, 8);

/*Crea una funcion que le pasemos un nombre
como parámetro y lance una alert diciendo hola saludo*/

function saludo(nombre, apellidos) {
  /* prompt("introduce un  nombre y apellidos"+ nombre, apellidos);
    alert("Hola " + nombre + apellidos);*/
  console.log(`Hola ${nombre} ${apellidos}`);
}
saludo("Mario", "Bross");

const n = prompt("escribe tu nombre");
const a = prompt("escribe tu apellido");
function saludo2(nombre, apellidos) {
  console.log(`Hola ${nombre} ${apellidos}`);
}
saludo2(n, a);

/*crea una funcion a la que sele pase un numero e imprima en la consola su tabla de multiplicar*/

function multiplicate(numero) {
  numero = prompt("Dame un santo número ");
  for (let i = 0; i < 11; i++) {
    console.log(numero + " x " + i + " = " + numero * i);/* Puedo hacer la condición como (`1 x ${i} = ${1 * i}`); -dnd cambiariamos 1 por nuestro parámetro que es numero*/
  }
}
multiplicate();
