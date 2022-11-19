const playerMoves = document.querySelectorAll(".player-move");
const cpuScore = document.querySelector(".cpu-score");
const playerScore = document.querySelector(".player-score");
const restart = document.querySelector(".restart");
let pScore = 0;
let cScore = 0;

playerMoves.forEach((move) =>
  move.addEventListener("click", (e) => {
    let myChoice = "";
    myChoice = e.target.getAttribute("data");

    function computerChoice() {
      let moves = ["rock", "paper", "scissors"];
      return moves[Math.floor(Math.random() * 3)];
    }
    function compare() {
      let cpu = computerChoice();

      if (cpu === myChoice) {
        console.log("xd");
      } else if (
        (cpu === "rock" && myChoice === "paper") ||
        (cpu === "paper" && myChoice === "scissors") ||
        (cpu === "scissors" && myChoice === "rock")
      ) {
        pScore++;
        playerScore.textContent = pScore;
      } else {
        cScore++;
        cpuScore.textContent = cScore;
      }
      console.log(`${cpu} ${myChoice}`);
      console.log(`${cScore} ${pScore}`);
    }
    compare();
  })
);

restart.addEventListener("click", (e) => {
  cScore = 0;
  pScore = 0;
  playerScore.textContent = pScore;
  cpuScore.textContent = cScore;
});
