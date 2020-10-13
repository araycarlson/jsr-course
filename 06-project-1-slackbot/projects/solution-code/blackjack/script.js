var suites = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
var cardValue = ['K', 'Q', 'J', 'A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']; 
var playerHand = [];
var dealerHand = [];
var playerScore = 0;
var dealerScore = 0;

function getRandomNumber(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomCard(){
  return {suite: suites[getRandomNumber(suites.length)],
  value: cardValue[getRandomNumber(cardValue.length)]};
}

function updateDom(){
  var playerHandDeal = []
  var dealerHandDeal = []
  
  playerHand.forEach(function(card){
    playerHandDeal.push(card.suite);
    playerHandDeal.push(card.value);
  });
  dealerHand.forEach(function(card){
    dealerHandDeal.push(card.suite);
    dealerHandDeal.push(card.value);
  });

  document.getElementById('player').innerHTML = playerHandDeal;
  document.getElementById('dealer').innerHTML = dealerHandDeal;
}
function updateScoreDom(){
  document.getElementById('playerScore').innerHTML = playerScore;
  document.getElementById('dealerScore').innerHTML = dealerScore;
}

function dealCards(){
  playerHand = [getRandomCard(), getRandomCard()];
  dealerHand = [ getRandomCard(), getRandomCard()];
  updateDom();
  playerScore = calcuateScore(playerHand);
  dealerScore = calcuateScore(dealerHand);
  updateScoreDom();
}

function hit(){
  playerHand.push(getRandomCard());
  updateDom();
  playerScore = calcuateScore(playerHand);
  dealerScore = calcuateScore(dealerHand);
  updateScoreDom();
}

function stay(){
  playerScore = calcuateScore(playerHand);
  while(dealerScore < 14){
    dealerHand.push(getRandomCard())
    dealerScore = calcuateScore(dealerHand);
  }
  dealerScore = calcuateScore(dealerHand);
  updateScoreDom();
  if(playerScore >=dealerScore){
    alert("Winner!")
    return 'Winner!'
  } else {
    alert("Loser!")
    return 'Loser!'
  }
}

function calcuateScore(player){
  score = 0;
  player.forEach(card => {
    if(card.value === 'J' ||card.value === 'K' ||
    card.value === 'Q' || card.value === 'A') {
      score = score + 10;
    } else {
      score = score + parseInt(card.value);
    }
  });

  if(score>21){
    alert("Bust!")
    return 'Bust!'
  } else if (score === 21){
    alert("Winner!")
    return 'Winner!'
  }
  return score;
}

function reset(){
  playerHand = [];
  dealerHand = [];
  updateDom();
  playerScore = 0;
  dealerScore = 0;
  updateScoreDom();
}