//14- Añade al ejercicio anterior que nos diga por cuál de los cuatro es divisible (debe decir todos aquellos por los que sea divisible)
//Es igual a la solución que he dado en el ejercicio 13, de todos modos pongo la solución


//13- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (solo hace falta comprobar si lo es por uno de los cuatro)
const number=prompt("Dame un número");
const divisibleby=[2,3,5,7];
let counter=0;
let remainder=0;

while (counter<4){
    if(remainder===number % divisibleby[counter]){
        alert("El numero " + number + " es divisible por " + divisibleby[counter]);
    }
        counter++;
    }