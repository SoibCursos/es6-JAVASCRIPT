//Declaracion de3 una funcion

function saludo(){
    console.log("Hola");
  
}

//Expresion de funcion

const saludoChachi = function(){
    console.log("Aloha!!");
};

//copio la funcion
const nuevoSaludo = saludo;

// ejecuto la funcion

const otroNuevoSaludo = saludo()

// CallBack--> Seria una funcion que se pasa como argumento a otra

function preguntar(pregunta, funcSi, funcNo){
    if (confirm(pregunta)){
        console.log("has contestado que SI");
    }
    else{
        console.log("Has contestado que NO");
    }
}

function mostrarSI(){
    console.log("Has contestado que SI");
}

function mostrarNO(){
    console.log("Has contestado que Noooooooo");
}

preguntar("Quieres un café", mostrarSI, mostrarNO);