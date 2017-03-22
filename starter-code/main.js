var cardOne = 'king';
var cardTwo = 'king'
var cardThree = 'queen';
var cardFour = 'queen';

var gameboard = document.getElementById('game-board');

var createCards = function(){
	for (var i = 0; i < 4; i++) {
		var newCard = document.createElement('div');
		newCard.setAttribute('class', 'card');
		document.getElementById('game-board').appendChild(newCard);
	};
};

/*if (cardOne === cardTwo) {
	alert ('Greatjob');
};
if (cardOne != cardTwo) {
	alert ('you done fucked up');
};
*/