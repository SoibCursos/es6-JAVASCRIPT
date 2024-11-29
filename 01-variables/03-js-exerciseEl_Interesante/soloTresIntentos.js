const pin = "1234";
let respuesta = "";
let intros = 0;

while (respuesta !== pin && intros < 3) {
  intros++;

  respuesta = prompt("escribe un pin, este es tu intento número= " + intros);
}
if (respuesta === pin) {
  alert("has acertado");
} else {
  alert("te has pasado de intentos");
}
