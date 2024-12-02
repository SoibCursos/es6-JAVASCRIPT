
//10- Escribe un programa que pida una frase y escriba las vocales que aparecen.
const frase=prompt("Escribe una frase");
let numVocales=0;

let vocales="";
const letrasFrase=frase.length;

for (let i = 0; i < letrasFrase; i++) {
    const letra=frase[i];
    if(letra==="a" || letra==="A" ||
        letra==="e" || letra==="e" ||
        letra==="i" || letra==="i" ||
        letra==="o" || letra==="o" ||
        letra==="u" || letra==="u"){
        numVocales++
        vocales=vocales + letra;
    }
}

alert("La frase tiene número de vocales= " + numVocales + "y son las siguientes=" + vocales);