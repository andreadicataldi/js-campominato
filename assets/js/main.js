var rndNumbers = [];
while (rndNumbers.length < 16) {
  var i = Math.floor(Math.random() * 100) + 1;
  if (rndNumbers.indexOf(i) === -1) rndNumbers.push(i);
}
console.log(rndNumbers);

var userArray = [];
for (let i = 0; i <= 84; i++) {
  var userNumber = Number(prompt("Inserisci un numero da 1 a 100 che non hai ancora inserito."));
  userArray.push(userNumber);
  if (rndNumbers.includes(userNumber)) {
    alert("Hai perso.");
    alert("Il tuo punteggio è: " + userArray.length);
    break;
  }
  if (userArray.length == 16) {
    alert("Hai vinto!");
    alert("Il tuo punteggio è: " + userArray.length);
  }
}