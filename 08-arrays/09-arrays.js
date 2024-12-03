const deportes=["futbol","padel","baloncesto"];
const deportesFavoritos=deportes;
deportes[deportes.length]="golf";

console.log("Lista de deportes",deportes);
console.log("Lista de deportes favoritos", deportesFavoritos);
//No podemos copiar arrays directamente, ya que lo que copiamos son el inicio de las posiciones de memoria, es decir, el puntero