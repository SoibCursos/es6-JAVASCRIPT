//ejemplo de proceso con length
let saludo="Hola buenos días";
let i=0;
while(i<saludo.length){
    console.log(saludo[i]);
//Imprimir mensaje al encontrar una a
if (saludo[i]==="a"){
    console.log("encontre una a empezando desde 0 incluido en la posición=" + i);
}

i++;
}

console.log(saludo.indexOf("días"));//Aquí tenemos el método - method - log e indexOf->que son las cosas que hacen los objetos
console.log(saludo.includes ("días"));
console.log(saludo.charAt(3));
console.log(saludo.charCodeAt(3));
//Aquí tenemos más muestras de métodos -methods
let userName="       Mafalda    ";
let userNameFiltered=userName.trim();
userNameFiltered=userNameFiltered.toLocaleLowerCase();
//Los methods se pueden concatenar, es decir, ^let userNameFiltered=userName.trim().toLocaleLowerCase();^
