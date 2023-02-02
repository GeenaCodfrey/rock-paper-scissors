// Computer's play
function getComputerChoice() {
  var computerChoices = ["rock", "paper", "scissors"];
  var computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  console.log(computerChoice);
}
getComputerChoice();
