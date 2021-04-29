let computerArray = ["rock", "paper", "scissors"];

//Score
let player1Score = 0;
let computerScore = 0;
let gameScore = 0;
let drawScore = 0;

//DOMS
let player1ScoreLocation = document.getElementById("player1-score");
let computerScoreLocation = document.getElementById("computer-score");
let drawScoreLocation = document.getElementById("draws-score");
let gameScoreLocation = document.getElementById("games");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

//Calculations
// computerArray = ["rock", "paper", "scissors"];
// let computer = computerArray[Math.floor(Math.random() * computerArray.length)];

//Assign image to RPC

//play
function game(player1, computer) {
  console.log(player1);
  console.log(computer);

  if (player1 === computer) {
    alert(0);
    draw();
  } else if (
    (player1 === "paper" && computer === "rock") ||
    (player1 === "rock" && computer === "scissors") ||
    (player1 === "scissors" && computer === "paper")
  ) {
    alert(1);
    win();
  } else {
    alert(-1);
    loose();
  }
}
//player1 choice
rock.addEventListener("click", function () {
  game("rock", computer());
});
paper.addEventListener("click", function () {
  game("paper", computer());
});

scissors.addEventListener("click", function () {
  game("scissors", computer());
});

function computer() {
  return computerArray[Math.floor(Math.random() * computerArray.length)];
}

function win() {
  player1Score++;
  player1ScoreLocation.innerText = player1Score;
  gameScore++;
  gameScoreLocation.innerText = gameScore;
  computerScore--;
  computerScoreLocation.innerText = computerScore;
}
function draw() {
  gameScore++;
  gameScoreLocation.innerText = gameScore;
  drawScore++;
  drawScoreLocation.innerText = drawScore;
}
function loose() {
  player1Score--;
  player1ScoreLocation.innerText = player1Score;
  gameScore++;
  gameScoreLocation.innerText = gameScore;
  computerScore++;
  computerScoreLocation.innerText = computerScore;
}

game();

//computer choice

// function player1winn() {
//   player1Score++;
//   player1ScoreLocation.innerHTML = player1Score;
//   computerScore--;
//   computerScoreLocation.innerHTML = computerScore;
//   gameScore++;
//   gameScoreLocation.innerHTML = gameScore;
// }

// function draw2() {
//   drawScore++;
//   drawScoreLocation.innerHTML = drawScore;
// }

// let play = true;
// while (play) {
//   let player1 = prompt("rock,paper or scissors");
//   let computerArray = ["rock", "paper", "scissors"];
//   function getWinner(player1, computer) {
//     if (player1 === computer) {
//       return alert(0);
//     } else if (
//       (player1 === "paper" && computer === "rock") ||
//       (player1 === "rock" && computer === "scissors") ||
//       (player1 === "scissors" && computer === "paper")
//     ) {
//       return alert(1);
//     } else {
//       return alert(-1);
//     }
//   }
//   // getWinner(player1, computer);

//   stopButton = document.querySelector(".button");
//   // stopButton.addEventListener("click", exit);
// }
