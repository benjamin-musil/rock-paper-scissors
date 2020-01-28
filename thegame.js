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
	return ("You win! :) " + playerSelection + " beats " + computerSelection + "!");
}

function lose(playerSelection, computerSelection) {
	return ("You lose! :( " + computerSelection + " beats " + playerSelection + "...");
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
