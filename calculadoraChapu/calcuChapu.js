//1.-Pedeir un operador
//2.-Pedir un número
//3.-Pedir otro número
//4.-realizar el cálculo según el operador
//5.-mostrar el resultado
//eval lo que hace es evaluar una cadena de texto y, si el interprete lo entiende, lo pasa a número

//Empieza el ejercicio
//1.-Pedeir un operador
const operador = prompt("Escribe un operador: +,-,/,*");
//2.-Pedir un número
const a = parseFloat(prompt("Primer operando:"));
//3.-Pedir otro número
const b = parseFloat(prompt("Segundo operando:"));
/*alert(eval(""+a+""+operador+""+ b));-- Ojo, no usar nunca eval en producción*/

//4.-realizar el cálculo según el operador
let resultado;
if (operador === "+") {
  resultado = a + b;
} else if (operador === "-") {
  resultado = a - b;
} else if (operador === "/") {
  resultado = a / b;
} else {
  resultado = a * b;
}
//Mostrar el resultado
alert("El resultao es : " + resultado);
