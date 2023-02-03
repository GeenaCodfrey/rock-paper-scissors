// List of options
const options = ["rock", "paper", "scissors"];

// Computer's play
function getComputerChoice() {
  let computerChoice = options[Math.floor(Math.random() * options.length)];

  return computerChoice;
}

// Player's play
function getPlayerChoice() {
  let validatedInput = false;

  while (validatedInput === false) {
    let playerChoice = prompt("Enter rock, paper, or scissors.");

    if (playerChoice === null) {
      continue;
    }
    const playerChoiceLowercase = playerChoice.toLowerCase;
    
    if ((playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") && (playerChoice != null)) {
      return playerChoice;
    }
    else {
      return "Please try again.";
    }
  }
}

// Check result
/*
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
*/
// Play a single round of Rock Paper Scissors
/*
function playRound(playerSelection, computerSelection) {
  const result = checkResult(playerSelection, computerSelection);

  if (result == "Tie") {
    return "It's a tie!";
  }
  else if (result == "Computer wins") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  else {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}
*/
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
  else {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  }
}

function game() {
  console.log("Slay");
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();

/*
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/