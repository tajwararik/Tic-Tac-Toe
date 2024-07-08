const playersData = document.querySelector("#players-data");

const gameBoardSection = document.querySelector("#game-board");

const startGame = document.querySelector("#start > button");

const gameBoard = gameBoardSection.querySelector("div");

const displayMessage = document.querySelector("#display");

// Creating initial cell
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

// Displaying the form
startGame.addEventListener("click", function () {
  playersData.style.display = "block";
  this.style.display = "none";
});

const submitButton = playersData.querySelector("button[type='submit']");

// Submitting the form
submitButton.addEventListener("click", () => {
  // Preventing default function to form submission
  event.preventDefault();

  const players = getPlayersData.playersName();
  player(players);

  playersData.style.display = "none";
  gameBoardSection.style.display = "block";
});

// Getting player's names using IIFE
const getPlayersData = (function () {
  const playerOne = playersData.querySelector("#player-one");
  const playerTwo = playersData.querySelector("#player-two");

  const playersName = () => {
    return [playerOne.value, playerTwo.value];
  };

  return { playersName };
})();

// Creating players profile
function player(players) {
  // Destructuring
  const [playerOne, playerTwo] = players;

  let playerOneSymbol = "";
  let playerTwoSymbol = "";

  // Using anonymous function as IIFE
  (() => {
    playerOneSymbol = "X";
    playerTwoSymbol = "O";
  })();

  const getPlayerOneSymbol = () => playerOneSymbol;
  const getPlayerTwoSymbol = () => playerTwoSymbol;

  const playerInfo = () => {
    return {
      playerOne: {
        name: playerOne,
        symbol: playerOneSymbol,
      },

      playerTwo: {
        name: playerTwo,
        symbol: playerTwoSymbol,
      },
    };
  };

  return {
    getPlayerOneSymbol,
    getPlayerTwoSymbol,
    playerInfo,
  };
}
