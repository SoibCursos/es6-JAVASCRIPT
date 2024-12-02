//11- Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
//TODO corregir

const frase=prompt("Escribe una frase");
const letrasFrase=frase.length;
let numVocales=0;
let vocales="";
let contador=0;

if (numVocales<letrasFrase) {
    switch (frase[numVocales]) {
        case "a": 
        case "e": 
        case "i": 
        case "o": 
        case "u": 
            break;
            contador++;
            vocales += vocales;
    }
}


alert("La frase tiene número de vocales= " + contador + " y son las siguientes= " + vocales);