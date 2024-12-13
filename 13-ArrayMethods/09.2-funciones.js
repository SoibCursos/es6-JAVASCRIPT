//Mas sobre callBacks

console.log("Antes del timeout!");

//Funcion como expresion
const imprimirAdios=function(){
    console.log("Adios!");
}

imprimirAdios();

//Funcion flecha

setTimeout( () => {}, 5000);//Esto crea una funcion anonima dentro de setTimeout

const imprimirAdios2= () => {
    console.log("Imprimo adios 2")
}




setTimeout(imprimirHola,0);

console.log("Después del timeout!!");

//Declaracion de funcion
function imprimirHola(){
    console.log("Hola");
}



