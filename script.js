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
	player.name = prompt("what's your name?", "John Locke");
	setObjects();
	showButtons();
}
function playerPick(pick) {
	player.pick = pick;	
	computerPick();
	checkResult();
}
function checkResult () {
	
	
	setObjects();
		var gameResult;
	
	if (player.pick === computer.pick) {
		gameResult = "Tie!"
	}
	else if (player.pick === 'rock') {
		if (computer.pick === 'scissors') {
			player.score++;
			gameResult = 'Player wins!';	
		}
		else if (computer.pick === 'paper') {
			computer.score++;
			gameResult = 'Computer wins!';
		}
	}
	else if (player.pick === 'paper') {
		if (computer.pick === 'rock') {
			player.score++;
			gameResult = 'Player wins!';		
		}
		else if (computer.pick === 'scissors') {
			computer.score++;
			gameResult = 'Computer wins!';
		}
	}
	else if (player.pick === 'scissors') {
		if (computer.pick === 'paper') {
			player.score++;
			gameResult = 'Player wins!';		
		}
		else if (computer.pick === 'rock') {
			computer.score++ ;
			gameResult ='Computer wins!';
		}
	}
		document.getElementById('gameResult').innerHTML = gameResult;
	endGame();
	
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
	document.getElementById("playerName").innerHTML = player.name;
	document.getElementById('playerScore').innerHTML = player.score;
	document.getElementById('computerScore').innerHTML = computer.score;
	document.getElementById('computerPick').innerHTML = computer.pick;
	document.getElementById('playerPick').innerHTML = player.pick;
	document.getElementById('gameResult').innerHTML = gameResult;
}

function showButtons() {
	var buttons = document.getElementsByClassName("pick-button");
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].style.visibility = 'visible';
	}	
}
function hideButtons(){
	var buttons = document.getElementsByClassName("pick-button");
  	for(var i = 0; i < buttons.length; i++) {
			 buttons[i].style.visibility = 'hidden';
  	};
}


function computerPick() {
	switch(Math.floor(Math.random()*3)) {
		case 0:
		computer.pick = 'rock';
		break;
		case 1:
		computer.pick = 'paper';
		break;
		case 2:
		computer.pick = 'scissors';
		break;
	}
}
function roundResult(gameResult) {
	var gameResult;
	
	if (player.pick === computer.pick) {
		gameResult = "Tie!"
	}
	else if (player.pick === 'rock') {
		if (computer.pick === 'scissors') {
			player.score++;
			gameResult = 'Player wins!';	
		}
		else if (computer.pick === 'paper') {
			computer.score++;
			gameResult = 'Computer wins!';
		}
	}
	else if (player.pick === 'paper') {
		if (computer.pick === 'rock') {
			player.score++;
			gameResult = 'Player wins!';		
		}
		else if (computer.pick === 'scissors') {
			computer.score++;
			gameResult = 'Computer wins!';
		}
	}
	else if (player.pick === 'scissors') {
		if (computer.pick === 'paper') {
			player.score++;
			gameResult = 'Player wins!';		
		}
		else if (computer.pick === 'rock') {
			computer.score++ ;
			gameResult ='Computer wins!';
		}
	}
}
function endGame() {
	if (player.score >= 10 || computer.score >= 10) {
		if (player.score > computer.score) {
			document.getElementById('roundResult').innerHTML = "Player wins the game!!";
		}
		else {
			document.getElementById('roundResult').innerHTML = "Computer wins the game!!";
		}
		hideButtons();
	}	
}

