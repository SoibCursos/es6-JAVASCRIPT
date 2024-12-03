debugger;
const aleatorio = Math.floor(Math.random() * 100) + 1;
let contador = 0;
const maxIntentos = 6;
let intro = 0;
/*alert("el número secreto es====" + aleatorio);*/

/*BUCLE*/
while (aleatorio !== intro && contador < maxIntentos) {
  contador++;
  intro = parseInt(
    prompt(
      "Introduce un número del 1 al 100, tienes 6 intentos, este es tu intento número=" +
        contador
    )
  );
  /*Si NO introduce un número*/
  if (isNaN(intro)) {
    alert("Por favor, introduce un número válido.");
    contador--; // Restamos el intento si no es un número válido
  }
  /*Fin de la comprobación --"Si NO introduce un número" */
  if (aleatorio > intro) {
    alert("Estás por debajo del número, sigue intentandolo ");
  }
  if (aleatorio < intro) {
    alert("Estás por Encima del número, sigue intentandolo ");
  }
  console.log(aleatorio);
  console.log(intro);
}
/*Fin BUCLE*/
if (aleatorio == intro) {
  alert("Has ACERTADO EL NÚMERO ERA===" + aleatorio);
} else {
  alert("Te has pasado de intentos");
}
