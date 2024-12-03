/**
 * Juego del Pitoniso
 * versión Do While y Break
 */

//Generar número aleatorio
const secretNumber=Math.floor(Math.random() * 100) + 1;
/*const maxIntentos=6;*/
let intentos=3;

do{
    let numeroJugador=parseInt(prompt("Introduce un número entre 1 y 100"))
    if(numeroJugador)===secretNumber={
        alert("Has GANADO!!");
        break;
    }
    alert(numeroJugador < secretNumber ? "No llegas, tas quedaooo CORTO" : "Te has PASADO colega");
}while(--intentos);
if(!intentos) {alert("Has PERDIDO")};
