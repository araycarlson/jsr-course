let prompt = require('prompt-sync')();

let player1Name = prompt('Player 1, what is your name?');

let player2Name = prompt('Player 2, what is your name?');
//
console.log(`OK ${player1Name} and ${player2Name}, get ready to go to WAR!`);

let suits = ['hearts', 'clubs', 'spades', 'diamonds'];
let ranks = [
  'ace',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'jack',
  'queen',
  'king'
];

function createDeck(ranks, suits) {
 //
}


// console.log(getRandomCard(deck))

function dealHand(deck, cardAmount = 1) {
//
}

let player1 = {
  name: player1Name,
  hand: []
}

let player2 = {
  name: player2Name,
  hand: []
}

// It should take a card out of player 1 and player 2's hands
//It should then compare the value of those cards to each other
// Once it knows which card is a higher value, it should then place both of those cards into the winners hands
// The hands of both players should then be returned reflecting the new amount of cards in their hand

function simpleRound(player1Card, player2Card) {
//
}

function fullGame(player1Card, player2Card) {
//
}

//Next we need to get a random card and then deal them

// TO DO:

// Ask the players their names

// Create a deck of cards

// Shuffle the deck of cards (might not need this if picking cards is random when drawing)

// Deal the cards to both players

// Be able to play a single round of comparing two cards, WITHOUT the weird War scenario (just skip it for now)

// Be able to repeat the single round gameplay over and over

// Be able to detect when someone wins

// Add in the War rules when two players tie (they draw again until someone has a higher card)

// Questions to think about:

// What objects do you need to create in order to represent all the different entities involved in the game?

// What properties does each entity need to have in order to hold all the data that is needed?

// What methods does each entity need to have in order to perform the functions it needs to do?

// How will the entities interact to actually play the game? Which entity's responsibility will it be to:
// - draw a card from each player's hand?
// - compare the cards to see who wins?
// - deposit the winnings in the winning player's hand?
// - determine if the game is over or not?

