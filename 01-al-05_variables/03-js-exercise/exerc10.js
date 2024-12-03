let sentence = prompt("Escribe una frase");
let caractersSentence = sentence.length;
var counter;
for (counter = 0; counter < caractersSentence; counter++) {
  if (
    sentence.substring(counter,1) === "a" ||
    sentence.substring(counter,1) === "A"
  ) {
    console.log(sentence.substring(counter, 1));
  }
}
