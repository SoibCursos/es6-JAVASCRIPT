debugger
const frase=prompt("Escribe una frase");
let numAes=0;
const letrasFrase=frase.length

for (let i = 0; i < letrasFrase; i++) {
    const letra=frase[i];
    if(letra==="a" || letra==="A"){
        numAes++
    }
}

alert("La frase tiene número de a= " + numAes);