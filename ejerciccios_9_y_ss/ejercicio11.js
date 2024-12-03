//11- Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
//TODO corregir

//const frase=prompt("Escribe una frase");
const frase="paola";
const letrasFrase=frase.length;
let numVocales=0;
let vocales="";
let contador=0;


while (contador<letrasFrase) {
    switch (frase[contador]) {
        case "a": 
        case "e": 
        case "i": 
        case "o": 
        case "u":
            numVocales++;
            vocales += frase[contador];            
    }
    contador++;
    console.log(contador); 
}


alert("La frase tiene número de vocales= " + numVocales + " y son las siguientes= " + vocales);