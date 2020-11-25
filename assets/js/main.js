alert(
  'Campo Minato by Andrea Di Cataldi ©\n\nLo scopo del gioco è inserire un numero cercando di evitare le 16 "mine" numeriche piazzate dal computer.\nNon è possibile inserire un numero già inserito in precedenza.\nBuona fortuna!'
);
var howHard = Number(
  prompt(
    "Choose your destiny...\n\nEASY - Inserisci: 0\nMEDIUM - Inserisci: 1\nHARD - Inserisci: 2"
  )
);
switch (howHard) {
  case 0:
    x = 100;
    break;
  case 1:
    x = 80;
    break;
  case 2:
    x = 50;
    break;
  default:
    alert("Devi inserire un numero da 0 a 2.");
}

var rndNumbers = [];
while (rndNumbers.length < 16) {
  var i = Math.floor(Math.random() * x) + 1;
  if (rndNumbers.indexOf(i) === -1) rndNumbers.push(i);
}
// console.log(rndNumbers);

var userArray = [];
for (var i = 0; userArray.length < x - 16; i++) {
  var userNumber = Number(
    prompt("Inserisci un numero da 1 a " + x + " che non hai ancora inserito.")
  );
  if (!userArray.includes(userNumber) && userNumber <= x && userNumber > 0) {
    userArray.push(userNumber);
  } else {
    alert(
      "Errore. Questo numero è già stato inserito oppure non è compreso tra 1 e " +
        x +
        ". Premi OK e riprova."
    );
  }

  if (rndNumbers.includes(userNumber)) {
    alert("Hai perso!");
    alert(
      "Il tuo punteggio è: " +
        userArray.length +
        " / 16\nPercentuale di completamento: " +
        (userArray.length / 16) * 100 +
        "%"
    );
    alert('Le "mine" del computer erano: ' + rndNumbers.join(" "));
    break;
  }
  if (userArray.length == 16) {
    alert("Hai vinto!");
    alert(
      "Il tuo punteggio è: " +
        userArray.length +
        " / 16\nPercentuale di completamento: " +
        (userArray.length / 16) * 100 +
        "%"
    );
    alert('Le "mine" del computer erano: ' + rndNumbers.join(" "));
    break;
  }
}
