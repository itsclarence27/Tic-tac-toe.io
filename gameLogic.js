let cells = document.querySelectorAll(".cell");
let playerWon = document.getElementById("playerWon");

let winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = "X";

function tryAgain() {
  cells.forEach((cell) => {
    cell.innerHTML = "";
    currentPlayer = "X";
    playerWon.innerHTML = "";
  });
}

function checkWin() {
  for (let combo of winningCombos) {
    let [a, b, c] = combo;

    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      playerWon.innerHTML = `Player ${currentPlayer === "X" ? "X" : "O"} wins!`;
      return true;
    }
  }
  return false;
}

function drawGame() {
  for (let cell of cells) {
    if (cell.innerHTML === "") {
      return false;
    }
  }
  return true;
}

cells.forEach(function (button) {
  button.addEventListener("click", function (event) {
    if (button.textContent === "") {
      button.textContent = currentPlayer;
      if (checkWin()) {
      } else if (drawGame()) {
        playerWon.innerHTML = `No player wins! Draw!`;
      }
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});
