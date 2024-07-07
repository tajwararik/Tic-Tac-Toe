const playersData = document.querySelector("#players-data");

const gameBoardSection = document.querySelector("#game-board");

const gameBoard = gameBoardSection.querySelector("div");

const displayMessage = document.querySelector("#display");

const startButton = gameBoardSection.querySelector("button[type='button']");

//Creating initial cell
document.addEventListener("DOMContentLoaded", () => {
  const board = createCell();
  board.getBoard();
});

function createCell() {
  const boardArray = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => {
    boardArray.forEach(() => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gameBoard.append(cell);
    });
  };

  return { getBoard };
}

//Displaying the form
startButton.addEventListener("click", () => {
  playersData.style.display = "block";
});

const submitButton = playersData.querySelector("button[type='submit']");

//Submitting the form
submitButton.addEventListener("click", () => {
  const players = getPlayersData.playersName();
  console.log(players);
  playersData.style.display = "none";
});

// Getting player's names
const getPlayersData = (function () {
  const playerOne = playersData.querySelector("#player-one");
  const playerTwo = playersData.querySelector("#player-two");

  const playersName = () => {
    return [playerOne.value, playerTwo.value];
  };

  return { playersName };
})();