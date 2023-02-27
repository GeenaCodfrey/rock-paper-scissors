// List of options
const options = ["rock", "paper", "scissors"];

// Computer's play
function getComputerChoice() {
  let computerChoice = options[Math.floor(Math.random() * options.length)];

  return computerChoice;
}

// Player's play
/*
function getPlayerChoice() {
  let validatedInput = false;

  while (validatedInput === false) {
    let playerChoice = prompt("Enter rock, paper, or scissors.");

    if (playerChoice === null) {
      continue;
    }
    const playerChoiceLowercase = playerChoice.toLowerCase();
    if (options.includes(playerChoiceLowercase)) {
      validatedInput === true;
      return playerChoice;
    }
  }
}
*/

// Check result
function checkResult(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  }
  else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    return "Computer wins";
  }
  else {
    return "Player wins";
  }
}

// Play a round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  if (checkResult(playerSelection, computerSelection) === "Tie") {
    return "It's a tie!";
  }
  else if (checkResult(playerSelection, computerSelection) === "Computer wins") {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
  else {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  }
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log("Let's play Rock Paper Scissors");

  for (let j = 0; j < 5; j++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    if (checkResult(playerSelection, computerSelection) === "Player wins") {
      scorePlayer++;
    }
    else if (checkResult(playerSelection, computerSelection) === "Computer wins") {
      scoreComputer++;
    }
  }
  console.log("Game Over");

  // Check who won most of the rounds. Winner of the game won most rounds
  if (scorePlayer > scoreComputer) {
    console.log("Player wins the Game!");
  }
  else if (scoreComputer > scorePlayer) {
    console.log("Computer wins the Game!");
  }
  else {
    console.log("It's a tie!");
  }
}
game();

/*
function startGame() {
  let startGameEl = document.getElementsByClassName("gameplay");
  if (startGameEl.style.display === "none") {
    startGameEl.style.display = "block";
  }
  else {
    startGameEl.style.display = "none";
  }
  // let imgs = document.querySelectorAll('img');
}
*/