function verificationAnswer(answer, start, min = 1, max = 100) {
  if (
    Number.isInteger(Number(answer)) &&
    ((Number(answer) >= Number(min) && Number(answer) <= Number(max)) || start)
  ) {
    return true;
  } else {
    alert("Ce n'est pas un nombre valide ! Essaie encore.");
    return false;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (Number(max) - Number(min)) + Number(min));
}

function moreOrLessMessage(randomNbr, answer, loop) {
  if (Number(answer) < Number(randomNbr)) {
    window.alert("C'est plus !");
    return true;
  } else if (Number(answer) > Number(randomNbr)) {
    window.alert("C'est moins !");
    return true;
  } else {
    alert(`C'est la bonne réponse! Nombre d'essaies : ${loop}`);
    return false;
  }
}

function callPrompt(min, max) {
  let answer = window.prompt("Entrez une valeur entre " + min + " et " + max, "");
  alert(answer);
  return answer;
}

function replay() {
  let replayAnswer = window.prompt("Souhaitez-vous relancer une partie ?");
  if (replayAnswer === "oui" || replayAnswer === "o") {
    alert("----Nouvelle Partie-----");
  } else {
    alert("Fin de partie. Au revoir.");
    play = false;
    rangeSetting = false;
  }
}

function getMinMax(message) {
  let value = window.prompt("Quelle est la valeur " + message + " que vous souhaitez avoir ?");

  return value;
}

function triesSetting() {
  let triesAnswer = window.prompt("Souhaitez-vous être limité à 10 essais ?", "");

  if (triesAnswer == "oui" || "o") {
    return true;
  }
  return false;
}

let play = true;

while (play) {
  let rangeSetting = true;
  let lowerValue = 1;
  let higherValue = 100;
  let triesNbr = 10;

  if (triesSetting()) {
    triesNbr = 10;
  }

  while (rangeSetting) {
    const lowerTemp = getMinMax("minimale");
    const higherTemp = getMinMax("maximale");
    if (verificationAnswer(lowerTemp, true) && verificationAnswer(higherTemp, true)) {
      lowerValue = lowerTemp;
      higherValue = higherTemp;
      rangeSetting = false;
    } else {
      alert("Erreur. Veuillez recommencer");
    }
  }

  let nbrRandom = getRandomInt(lowerValue, higherValue);

  let game = true;
  let loop = 0;
  while (game) {
    const nbrAnswer = callPrompt(lowerValue, higherValue);
    const correctAnswer = verificationAnswer(nbrAnswer, false, lowerValue, higherValue);
    if (correctAnswer) {
      loop++;
      game = moreOrLessMessage(nbrRandom, nbrAnswer, loop);
    }
    if (loop === triesNbr) {
      window.alert(`Vous avez perdu le nombré était ${nbrRandom}`);
      game = false;
    }
  }

  replay();
}
