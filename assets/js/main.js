var howHard = Number(
  prompt(
    "Choose your destiny...\nEASY - Inserisci: 0\nMEDIUM - Inserisci: 1\nHARD - Inserisci: 2"
  )
);
alert(
  'Lo scopo del gioco è inserire un numero cercando di evitare le 16 "mine" numeriche piazzate dal computer.\nNon è possibile inserire un numero già inserito in precedenza.\nBuona fortuna!'
);
if (howHard == 0) {
  x = 100;
} else if (howHard == 1) {
  x = 80;
} else if (howHard == 2) {
  x = 50;
} else {
  alert("Devi inserire un valore tra 0 e 2.");
}

var rndNumbers = [];
while (rndNumbers.length < 16) {
  var i = Math.floor(Math.random() * x) + 1;
  if (rndNumbers.indexOf(i) === -1) rndNumbers.push(i);
}
console.log(rndNumbers);

var userArray = [];
for (let i = 0; i <= 84; i++) {
  var userNumber = Number(
    prompt("Inserisci un numero da 1 a " + x + " che non hai ancora inserito.")
  );
  userArray.push(userNumber);
  if (rndNumbers.includes(userNumber)) {
    alert("Hai perso.");
    alert(
      "Il tuo punteggio è: " +
        (userArray.length - 1) +
        " / 16\nPercentuale di completamento: " +
        ((userArray.length - 1) / 16) * 100 +
        "%"
    );
    alert('Le "mine" del computer erano: ' + rndNumbers.join(" "));
    break;
  }
  if (userArray.length == 16) {
    alert("Hai vinto!");
    alert(
      "Il tuo punteggio è: " +
        (userArray.length - 1) +
        " / 16\nPercentuale di completamento: " +
        ((userArray.length - 1) / 16) * 100 +
        "%"
    );
    alert('Le "mine" del computer erano: ' + rndNumbers.join(" "));
  }
}
