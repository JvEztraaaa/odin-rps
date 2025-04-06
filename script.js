function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return computerChoice[random];
}

console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt(`What is your pick?
      1 = rock
      2 = paper 
      3 = scissors`);

  if (humanChoice == "1") {
    alert("Your choice is rock.");
    return "rock";
  } else if (humanChoice == "2") {
    alert("Your choice is paper.");
    return "paper";
  } else if (humanChoice == "3") {
    alert("Your choice is scissors.");
    return "scissors";
  } else {
    alert("Invalid choice.");
    return null;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert("It's a tie!");
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    alert("You won!");
    return "humanWin";
  } else {
    alert("You lost.");
    return "computerWin";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (humanSelection) {
      const winner = playRound(humanSelection, computerSelection);

      if (winner === "humanWin") {
        humanScore++;
      } else if (winner === "computerWin") {
        computerScore++;
      }
    } else {
      alert("Invalid Choice.");
    }
  }

  if (humanScore > computerScore) {
    alert("Congratulations! You won the game.");
  } else if (computerScore > humanScore) {
    alert("You lost. The computer wins it all.");
  } else {
    alert("It's a tie game!");
  }

  alert(`Human: ${humanScore} | Computer: ${computerScore}`);
}

playGame();
