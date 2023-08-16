function isGoodTurn(chehDice, chefinaDice) {
  var sum = chehDice + chefinaDice;

  if (sum > 6) {
    return true;
  } else {
    return false;
  }
}

var chehDice = Math.floor(Math.random() * 6) + 1;
var chefinaDice = Math.floor(Math.random() * 6) + 1;

var isTurnGood = isGoodTurn(chehDice, chefinaDice);
console.log("Cheh's dice:", chehDice);
console.log("Chefina's dice:", chefinaDice);
console.log("Is the turn good?", isTurnGood);
