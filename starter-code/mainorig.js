var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var boardCards = []

var gameboard = document.getElementById('game-board');

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		boardCards[i] = document.createElement('div');
		boardCards[i].setAttribute('class', 'card');
		boardCards[i].setAttribute('data-card',cards[i]);
		document.getElementById('game-board').appendChild(boardCards[i]);
		boardCards[i].addEventListener('click', isTwoCards);
	};
};

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.setAttribute('class', 'flippedKing');
	} else if (this.getAttribute('data-card') === 'queen') {
		this.setAttribute('class', 'flippedQueen');
	};
	if (cardsInPlay.length === 2) {
		isMatch();
	};
};

 var isMatch = function () {
 	if (cardsInPlay[0] === cardsInPlay[1]) {
 		alert('Yeh boiii!!!');
 	} else {
 		alert('NO GOOD!');
 	};
 	clearBoard();
};

var clearBoard = function() {
	for (var i = 0; i < boardCards.length; i++) {
		boardCards[i].setAttribute('class', 'card');
	};
	cardsInPlay = []
};
