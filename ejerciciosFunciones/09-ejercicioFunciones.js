debugger;
/*
Ejercicio. Poner un satring -este fin de semana hay puente- MIRAR W3C >METHOD STRING.
-Hay algún método de strings que convierta a array por un delimutados?
-Hay algún método de array que invierta su orden?
-Hay algún médoto de array que lo convierta en string, buscarlo en w3c method strings ó arrays. En este caso es .join("y el separador que quiera")
*/
function alreves(text){
    const newArray=text.split(" ");
    const reves=newArray.reverse();
    const newText=reves.join(" ");
    return newText;
    //return text.split(" ").reverse().join(" ");
}
alert(alreves("este fin de semana hay puente"));