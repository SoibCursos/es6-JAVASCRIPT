// ECMASCRIPT 2015  -> let  const...template strings
producto="Teclado USB";
cost="180 €";
let oferta=producto + ", tiene un preio de:" + cost;
console.log(oferta);
//Interpolación de variables. Dentro del &{} le puedo poner código Javascript
let oferta2=`El producto ${producto}, tiene un precio de ${cost}. La suma de 1 *2 es : ${1+2}`;

let p1="Tele";
let p2="Teléfono";
let p3="Calculadora";
let nombre="Ana";

let lista=`<h1>${nombre}</h1>
            <ul>
                <li>${p1}</li>
                <li>${p2}</li>
                <li>${p3}</li>
            </ul>`

console.log(oferta2);
document.write(list);

//Métodos para Strings

//Conocer sun longitud
const saludo="Hola buenos días";
console.log(saludo.length);
console.log(saludo[0]);
console.log(saludo[3]);
console.log(saludo[saludo.length-1]);
console.log(saludo.length);

//ejemplo de proceso con length
let i=0;
while(i<saludo.length){
    console.log(saludo[i]);
//Imprimir mensaje al encontrar una a
if (console.log(saludo[i])==="a"){console.log("encontre una=)" + saludo[i]}

i++;
}
