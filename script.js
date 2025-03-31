
function verificationAnswer(answer, start, min = 1, max = 100) {
  if (Number.isInteger(answer) && ((answer >= min && answer <= max) || start)) {
    return true;
  } else {
    console.log("Ce n'est pas un nombre valide ! Essaie encore.");
    return false;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min + 1);
}

function moreOrLessMessage(randomNbr, answer, loop) {
  if (answer < randomNbr) {
    console.log("C'est plus !");
  } else if (answer > randomNbr) {
    console.log("C'est moins !");
  } else {
    console.log("C'est la bonne réponse! \n", "Nombre d'essaies : ", loop);
  }
}

function callPrompt(min, max) {
    let answer = window.prompt("Entrez une valeur entre " + min + " et " + max, "");

    return answer;
}

function replay() {
    let replayAnswer = window.prompt("Souhaitez-vous relancer une partie ?", "");

    if (replayAnswer == "oui" || "o") {
        console.log("----Nouvelle Partie-----");
    }
    else {
        console.log("Fin de partie. Au revoir.");
        play = false;
    }
}

function getMinMax(message) {
    let value = window.prompt("Quelle est la valeur " + message + " que vous souhaitez avoir ?")

    return (value);
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

    let rangeSetting = true
    let lowerValue = 1;
    let higherValue = 100;

    let triesNbr = null;

    if (triesSetting()) {
        triesNbr == 10;
    }


    while (rangeSetting) {
        const lowerTemp = getMinMax("minimale");
        const higherTemp = getMinMax("maximale");

        if (verificationAnswer(lowerTemp, true) && verificationAnswer(higherTemp, true)) {
            lowerValue = lowerTemp;
            higherValue = higherTemp;
            rangeSetting = false;
        }
        else {
            console.log("Erreur. Veuillez recommencer");
        }
    }

    //getrandomInt

    let game = true;
    let loop = 0;

    while (game) {
        const nbrAnswer = callPrompt(lowerValue, higherValue);
        const correctAnswer = verificationAnswer(nbrAnswer, false, lowerValue, higherValue);
        if (correctAnswer) {
            loop++;
            //verify

            if (triesNbr == loop) {
                console.log("Vous avez épuisé votre nombre d'essais")
                game = false;
            }
        }
    }

    replay();
}
