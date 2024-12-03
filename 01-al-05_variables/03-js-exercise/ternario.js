let valorUno=parseInt(prompt("introduce el primer número?"));
let valorDos=parseInt(prompt("introduce el Segundo número?"));
let valorTres=parseInt(prompt("introduce el Tercer número?"));

let resultado=(valorUno>valorDos ? (valorUno>valorTres ? valorUno : valorTres) :(valorDos>valorTres?valorDos:valorTres));

console.log(resultado);