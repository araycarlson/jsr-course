
document.getElementById("roll-dice").onclick = diceRoll;

function dieString(){
    return 'dice-' + Math.floor(Math.random()*6+1)
}

function diceRoll() {
//   var random1 = Math.floor(Math.random()*6+1)
//   var firstDie = 'dice-' + random1
//   var random2 = Math.floor(Math.random()*6+1)
//   var secondDie = 'dice-' + random2
  document.getElementById("first-die").className = dieString();
  document.getElementById("second-die").className = dieString();
}
