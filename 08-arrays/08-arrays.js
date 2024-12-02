//Arrays, pensar como una colección de datos (lista de elementos separados por comas)

//formas de construir un array. Hay dos formas>una literal, otra 

//Array literal
const numberList=[12,34,56,79,98];
const mixt=[12,"hola", true, null];

//Constructor (esto es lo mismo que lo anterir pero entre parentesis)
let frutas=new Array("Manzana", "Pera", "Naranja","Chirimollas");

let x;
//Como obtener el valor de un elemento del arary
x=numberList[0];
x=numberList[1]+numberList[3];
x=`mi frta preferida es ${frutas[3]}`;
x=frutas.length;
frutas[0]="fresa";

console.log(x);