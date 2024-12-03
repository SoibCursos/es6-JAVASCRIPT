alert("Hello World");
document.write("Hello World");
document.write(3+5);

let nombre=prompt ("Escribe nombre:");
document.write("Hola" + nombre);

let numero1=prompt("Dime un número, el primero");
let numero2=prompt("Ahora dame un número, el segundo");
document.write(numero1+numero2);
//ejercicio 6
let numero3=prompt("Ya sé, ya sé pido otro número");
let numero4=prompt("Soy un pesado, dame un número");
let elMayor=Math.max(numero3, numero4);
document.write(elMayor);
//ejercicio 7
let numero5=prompt("Ya sé, ya sé pido otro número");
let numero6=prompt("Soy un pesado, dame un número");
let numero7=prompt("Soy un pesado, dame un número");
let elMayorDeTres=Math.max(numero5, numero6, numero7);
document.write(elMayorDeTres);
//ejercicio 8
let n1 = prompt("Escribe un número");
if (n1 % 2 === 0) {
document.write("Es divisible por 2");
} else {
document.write("No es divisible por 2");
}
//ejercicio 9
let sentence = prompt("Escribe una frase");
let caractersSentence = sentence.length;
var counter;
for (counter = 0; counter < caractersSentence; counter++) {
  if (
    sentence.substring(counter,1) === "a" ||
    sentence.substring(counter,1) === "A"
  ) {
    console.log(sentence.substring(counter, 1));
  }
}
//exercise 10
