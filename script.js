// Make a computerPlay function
function computerPlay() {
  const arr = ["rock", "paper", "scissor"];

  let randomNumber = Math.floor(Math.random() * 3);

  // console.log(randomNumber);
  return arr[randomNumber];
}

var playerScore = 0;
var computerScore = 0;
function playRound(playerSelection, computerSelection) {
  // if both select same, it's a tie
  if (playerSelection === computerSelection) return "Its a tie!";

  // check all cases if player selects 'rock'
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log("You Lose! Paper beats Rock");
      return ++computerScore;
    }
    if (computerSelection === "scissor") {
      console.log("You Won! Rock beats scissor");
      return ++playerScore;
    }
  }

  // check all cases if player selects 'paper'
  if (playerSelection === "paper") {
    if (computerSelection === "scissor") {
      console.log("You Lose! Scissor beats Paper");
      return ++computerScore;
    }
    if (computerSelection === "rock") {
      console.log("You Won! Paper beats Rock");
      return ++playerScore;
    }
  }

  // check all cases if player selects 'scissor'
  if (playerSelection === "scissor") {
    if (computerSelection === "paper") {
      console.log("You Lose! Paper beats Scissor");
      return ++computerScore;
    }
    if (computerSelection === "rock") {
      console.log("You Lose! Rock beats scissor");
      return ++computerScore;
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your choice: ").toLowerCase();
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
  }

  //deciding winner
  if (playerScore === computerScore) console.log("Final Result: It's a tie!!");

  //ternary operator
  playerScore > computerScore
    ? console.log("Final Result: Congrats! You Win!!")
    : console.log("Final Result: Bad Luck! You Lose!!");
}

game();
