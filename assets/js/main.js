//Genero 16 numeri casuali tra 1 e 100 senza duplicati
var rndNumbers = [];
while (rndNumbers.length < 16) {
  var i = Math.floor(Math.random() * 100) + 1;
  if (rndNumbers.indexOf(i) === -1) rndNumbers.push(i);
}
console.log(rndNumbers);

var userNumber = 0;
var userArray = [];

while (!(rndNumbers.includes(userNumber))) {
  userNumber = Number(prompt("Inserisci un numero compreso tra 1 e 100."));
  if (rndNumbers.includes(userNumber)) {
    alert("Hai perso!");
    alert("Il tuo punteggio finale è: " + userArray.length);
  }
  userArray.push(userNumber);
  userArray.length == 16;
}

if (userArray.length == 16) {
  alert("Hai vinto!")
  alert("Il tuo punteggio finale è: " + userArray.length);
}