var computer = {
	name: 'computer',
	score: 0,
	pick: ''
},
	player = {
	name: '',
	score: 0,
	pick:''
},
	round = 0,
	x = Math.random();
	
	
	
function newGame() {
	resetScore();
	player.name = prompt("Podaj swoje imię", "John Locke");
	setObjects();
	showAndHideElements();
}
function playerPick(pick) {
	player.pick = pick;	
	computerPick();
	checkResult();
}
function checkResult () {
	
	
	setObjects();
		var gameResult,
			leftColumn = document.getElementById('left-column'),
			rightColumn = document.getElementById('right-column');
	
	if (player.pick === 'Anivia') {
		showImg(leftColumn, 'img-left', 'img/anivia.png');
		if (computer.pick === 'Fizz') {
			showImg(rightColumn, 'img-right', 'img/fizz.png');
			player.score++;
			gameResult = 'Gracz wygrywa!';	
		}
		else if (computer.pick === 'Brand') {
			showImg(rightColumn, 'img-right', 'img/brand.png');
			computer.score++;
			gameResult = 'Komputer wygrywa!';
		}
		else if (player.pick === computer.pick) {
			showImg(rightColumn, 'img-right', 'img/anivia.png');
		gameResult = "Remis!"
		}
	}
	else if (player.pick === 'Fizz') {
		showImg(leftColumn, 'img-left', 'img/fizz.png');
		if (computer.pick === 'Brand') {
			showImg(rightColumn, 'img-right', 'img/brand.png');
			player.score++;
			gameResult = 'Gracz wygrywa!';		
		}
		else if (computer.pick === 'Anivia') {
			showImg(rightColumn, 'img-right', 'img/anivia.png');
			computer.score++;
			gameResult = 'Komputer wygrywa!';
		}
		else if (player.pick === computer.pick) {
			showImg(rightColumn, 'img-right', 'img/fizz.png');
		gameResult = "Remis!"
		}
	}
	else if (player.pick === 'Brand') {
		showImg(leftColumn, 'img-left', 'img/brand.png');
		if (computer.pick === 'Anivia') {
			showImg(rightColumn, 'img-right', 'img/anivia.png');
			player.score++;
			gameResult = 'Gracz wygrywa!';		
		}
		else if (computer.pick === 'Fizz') {
			showImg(rightColumn, 'img-right', 'img/fizz.png');
			computer.score++ ;
			gameResult ='Komputer wygrywa!';
		}
		else if (player.pick === computer.pick) {
			showImg(rightColumn, 'img-right', 'img/brand.png');
		gameResult = "Remis!"
		}
	}
		document.getElementById('gameResult').innerHTML = gameResult;
	endGame();
	function showImg(column, imgClass, imgSrc) {
		var leftColumn = document.getElementById('left-column'),
			rightColumn = document.getElementById('right-column');
		column.innerHTML = '<img class="' + imgClass + '"src="' + imgSrc + '">';
		column.style.display = 'none';
		$(column).fadeIn(1000);
	};
}


function resetScore() {
	computer.score = 0;
	computer.pick = '';
	player.score = 0;
	player.pick = '';
	round = 0;
	gameResult = '';
}
function setObjects() {
	var playerName = document.getElementsByClassName("player-name");
	document.getElementById('playerScore').innerHTML = player.score;
	document.getElementById('computerScore').innerHTML = computer.score;
	document.getElementById('computerPick').innerHTML = computer.pick;
	document.getElementById('playerPick').innerHTML = player.pick;
	document.getElementById('gameResult').innerHTML = gameResult;

	for(var i = 0; i < playerName.length; i++) {
		playerName[i].innerHTML = player.name;
	}
}

function showAndHideElements() {
	var gameElements = document.getElementById('game-elements'),
		infoBoard = document.getElementById('rules'),
		computerName = document.getElementById('computer-name'),
		playerName = document.getElementsByClassName("player-name");
	for(var i = 0; i < playerName.length; i++) {
		playerName[i].style.visibility = 'visible';
	}
	infoBoard.style.display = 'none';	
	computerName.style.visibility = 'visible';
	gameElements.style.visibility = 'visible';
	document.getElementById('roundResult').innerHTML = " ";
}
function hideGameElements(){
	var gameElements = document.getElementById('game-elements'),
		infoBoard = document.getElementById('rules'),
		computerName = document.getElementById('computer-name'),
		playerName = document.getElementsByClassName("player-name"),
		gameResultsBox = document.getElementById('game-results'),
		leftColumn = document.getElementById('left-column'),
		rightColumn = document.getElementById('right-column');
  	
  	gameElements.style.visibility = 'hidden';
  	infoBoard.style.display = 'block';
  	computerName.style.visibility = 'hidden';
  	gameResultsBox.outerHTML = "";
  	leftColumn.style.display = 'none';
  	rightColumn.style.display = 'none';


	delete gameResultsBox;
  	for(var i = 0; i < playerName.length; i++) {
		playerName[i].style.visibility = 'hidden';
	}
}


function computerPick() {
	switch(Math.floor(Math.random()*3)) {
		case 0:
		computer.pick = 'Anivia';
		break;
		case 1:
		computer.pick = 'Fizz';
		break;
		case 2:
		computer.pick = 'Brand';
		break;
	}
}
function endGame() {
	if (player.score >= 10 || computer.score >= 10) {
		if (player.score > computer.score) {
			showGameResult('Gracz');
		}
		else {
			showGameResult('Komputer');
		}
		
		function showGameResult(player) {
			var body = document.getElementsByTagName("body"),
				gameResultInfo = document.createElement("DIV"),
				gameResultBox = document.createElement("DIV"),
				gameResultText = document.createElement("H1");
			
			gameResultInfo.id = "game-results";
			gameResultBox.id = "game-results-content";

			document.body.appendChild(gameResultInfo);
			gameResultInfo.appendChild(gameResultBox);
			gameResultBox.appendChild(gameResultText);

			gameResultText.innerHTML = player + " wygrywa grę!"; 
			gameResultBox.innerHTML = '<h1>' + player + ' wygrywa grę!</h1><button class = "btn game-button" onclick = "hideGameElements()">OK</button>';
		};
	}	
}
