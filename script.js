const scoreDesc = document.querySelector("#score-desc");
const score = document.querySelector(".score");

let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
rock.addEventListener("click", function () {
  getHumanChoice = "Rock";
  computerChoice = getComputerChoice();
  playRound(getHumanChoice, computerChoice);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", function () {
  getHumanChoice = "Paper";
  computerChoice = getComputerChoice();
  playRound(getHumanChoice, computerChoice);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function () {
  getHumanChoice = "Scissors";
  computerChoice = getComputerChoice();
  playRound(getHumanChoice, computerChoice);
});

function getComputerChoice() {
  const computerChoice = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * 3);
  return computerChoice[random];
}

function playRound(humanChoice, computerChoice) {
  const hChoice = humanChoice.toLowerCase();
  const cChoice = computerChoice.toLowerCase();

  if (hChoice === cChoice) {
    scoreDesc.textContent = "It's a tie!";
    return "tie";
  } else if (
    (hChoice == "rock" && cChoice == "scissors") ||
    (hChoice == "paper" && cChoice == "rock") ||
    (hChoice == "scissors" && cChoice == "paper")
  ) {
    scoreDesc.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    scoreDesc.textContent = `You lost. ${computerChoice}  beats ${humanChoice}`;
    computerScore++;
  }

  score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore > computerScore) {
      alert("Congratulations! You won the game.");
    } else if (computerScore > humanScore) {
      alert("You lost. The computer wins it all.");
    } else {
      alert("It's a tie game!");
    }

    humanScore = 0;
    computerScore = 0;
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    scoreDesc.textContent = "Select your fate!";
  }
}
