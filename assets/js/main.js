var rndNumbers = [];
while (rndNumbers.length < 16) {
  var i = Math.floor(Math.random() * 100) + 1;
  if (rndNumbers.indexOf(i) === -1) rndNumbers.push(i);
}
console.log(rndNumbers);

/* for (i = 0; promptedNumber != rndNumbers[i]; i++) {
  const element = array[i];
  
} */