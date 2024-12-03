//12- Escribe un programa que pida una frase y escriba cuántas veces aparece cada una de las vocales
let text=prompt("introduce una frase");
let length=text.length;
let vocalAa=0, vocalEe=0, vocalIi=0, vocalOo=0, vocalUu=0;
let counter=0;


while(counter<length){
    switch (text.toLocaleLowerCase()[counter]) {
        case "a":
            vocalAa++;
            break;
        case "e":
            vocalEe++;
            break;
        case "i":
        vocalIi++;
            break;
        case "o":
        vocalOo++;
            break;
        case "u":
        vocalUu++;
            break;
    }
    counter++;
}
alert("Cantidad/Aparición de a=" + vocalAa + ", cantidad de e=" + vocalEe + ", cantidad de i=" + vocalIi + ", cantidad de o=" + vocalOo + ", cantidad de u=" + vocalUu);
