function computerPlay() {
	switch (Math.floor(Math.random()*10) % 3) {
		case 0:
			return "Rock";
		case 1:
			return "Paper";
		case 2:
			return "Scissors";
	}
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1);

	if (playerSelection == computerSelection) {
		return ("Tie game, " + playerSelection + " ties " + computerSelection + ".");
	}
	else if (playerSelection == "Rock") {
		if (computerSelection == "Scissors") {
			return win(playerSelection, computerSelection);
		}
		else {
			return lose(playerSelection, computerSelection);
		}
	}
	else if (playerSelection == "Paper") {
		if (computerSelection == "Rock") {
			return win(playerSelection, computerSelection);
		}
		else {
			return lose(playerSelection, computerSelection);
		}
	}
	else if (playerSelection == "Scissors") {
		if (computerSelection == "Paper") {
			return win(playerSelection, computerSelection);
		}
		else {
			return lose(playerSelection, computerSelection);
		}
	}
	else {
		return "Please input Rock, Paper, or Scissors.";
	}
}

function win(playerSelection, computerSelection) {
	playerScore++;
	return ("You win! :) " + playerSelection + " beats " + computerSelection + "!");
}

function lose(playerSelection, computerSelection) {
	computerScore++;
	return ("You lose! :( " + computerSelection + " beats " + playerSelection + "...");
}

function game() {
	while ((playerScore + computerScore) < 5) {
		document.getElementById("result").innerHTML = playRound(prompt(), computerPlay())
	}

	if (playerScore > computerScore) {
		document.getElementById("result").innerHTML = ("You win with a score of " + 
			playerScore + " to " + computerScore + "!");
	}
	else {
		document.getElementById("result").innerHTML = ("You lose with a score of " + 
			playerScore + " to " + computerScore + ".");
	}

	playerScore = 0;
	computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;