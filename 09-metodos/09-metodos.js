//metodos de array
/*Puedo concatenar métodos , pero los métodos que podemos usar dependen del tipo de dato devuelto en el método anterior ej. x=arr.slice(1,4).reverse().tiString().charAt(0);*/ 
let x;
const arr = [28, 34, 56, 73, 890, 55];
//Añadir un elemento al final
arr.push(100, 20, 22);
arr.pop(); //Elimina el último elemento
arr.unshift(2000); //Anñade al principio
arr.shift(); //Quita el primer elemneto

//arr.reverse();
x = arr.includes(103); //Devuelve true o false si está un elemento dentro del array
x = arr.indexOf(34); //Devuelve la posiciónn de dnd se encuetra 34, si no existisiese devolveria -1
x = arr.toString(); //Pasa el array a string (cadena de caracteres
x = arr.join(" -"); //Lo que hace es unir todos los elementos del array con el caracter que he puesto entre comillas, en este caso le he puesto "un espacio y -". Se usa para enrutar(Hacer path)
x=arr.slice(1, 4); //Devuelve una copia desde el elemento 1 al 4
x=arr.splice(1,4);/*Quita los elementos del 1 al 4. Mirar W3C-https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_splice
// Create an Array*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi");

x=arr.slice(1,4).reverse().tiString().charAt(0);
//x = arr;
console.log(x);
