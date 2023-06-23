const buttonsElement = document.querySelectorAll("button");
const resultElement = document.getElementById("results");
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttonsElement.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playedRound(button.id, computerPlay());
    resultElement.textContent = result;
  });
});

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playedRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "it's a tie";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    userScoreElement.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreElement.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}
