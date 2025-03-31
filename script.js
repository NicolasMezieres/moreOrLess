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
