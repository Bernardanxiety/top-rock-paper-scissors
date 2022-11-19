function game() {
  const moves = ["rock", "paper", "scissors"];
  function getComputerChoice() {
    function rng() {
      let currentRNG = Math.floor(Math.random() * 3);
      return moves[currentRNG];
    }

    let move = rng();
    return move;
  }

  function getPlayerChoice() {
    let cpuMove = getComputerChoice();
    let playerMove = getPlayerChoice();

    if (cpuMove === playerMove) {
      window.alert("Draw");
    } else if (cpuMove === "rock") {
      if (playerMove === "paper") {
        window.alert("Player wins");
      } else {
        window.alert(`${cpuMove} Player loses`);
      }
    } else if (cpuMove === "paper") {
      if (playerMove === "scissors") {
        window.alert("Player wins");
      } else {
        window.alert(`${cpuMove} wins`);
      }
    } else {
      if (playerMove === "rock") {
        window.alert("Player wins");
      } else {
        window.alert(`${cpuMove} wins`);
      }
    }
    console.log(cpuMove + playerMove);
  }
}
