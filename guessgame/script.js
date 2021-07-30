"use strict";
/* console.log(document.querySelector('.message').textContent);x
console.log(
  (document.querySelector('.message').textContent = '✅ Correct Number!')
);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = "?";

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When no input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔️ No number!";
    displayMessage("⛔️ No number!");

    //When Player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "✅ Correct Number!";
    displayMessage("✅ Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too High!" : "Too Low!";
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      displayScore(score);
    } else {
      // document.querySelector(".message").textContent = "💥 You lost the game!";
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }
});

//Again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  displayScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  // document.querySelector(".message").textContent = "Start Guessing...";
  displayMessage("Start Guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
