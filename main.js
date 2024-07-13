const playersData = document.querySelector("#players-data");

const gameBoardSection = document.querySelector("#game-board");

const startGame = document.querySelector("#start > button");

const gameBoard = gameBoardSection.querySelector("div");

const displayMessage = gameBoardSection.querySelector("p");

// Creating initial cell
document.addEventListener("DOMContentLoaded", () => {
  loadBoard.getBoard();
});

// Using IIFE
const loadBoard = (function () {
  const boardArray = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => {
    boardArray.forEach((_, index) => {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-index", index);
      gameBoard.append(cell);
    });
  };

  return { getBoard };
})();

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
  const startGame = player(players);
  displayMessage.textContent = `First turn is for ${players[0]} (X)`;

  playersData.style.display = "none";
  gameBoardSection.style.display = "block";

  game(startGame);
});

// Getting player's names using IIFE
const getPlayersData = (function () {
  const playerOne = playersData.querySelector("#player-one");
  const playerTwo = playersData.querySelector("#player-two");

  const playersName = () => {
    if (playerOne.value !== "" && playerTwo.value !== "")
      return [playerOne.value, playerTwo.value];
    else alert("Please enter the players' names.");
  };

  return { playersName };
})();

// Creating players profile
function player(players) {
  // Destructuring array
  const [playerOne, playerTwo] = players;

  let playerOneSymbol = "";
  let playerTwoSymbol = "";

  // Using anonymous function as IIFE
  (() => {
    playerOneSymbol = "X";
    playerTwoSymbol = "O";
  })();

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
    playerInfo,
  };
}

function game(startGame) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const tempArray = Array(9).fill(null);

  // Destructuring object
  const { playerOne, playerTwo } = startGame.playerInfo();

  let currentPlayer = playerOne;

  const cells = gameBoardSection.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.addEventListener("click", handleSymbols, { once: true });
  });

  function handleSymbols(e) {
    const cell = e.target;
    const index = cell.getAttribute("data-index");
    tempArray[index] = currentPlayer.symbol;
    cell.textContent = currentPlayer.symbol;

    if (checkWin(currentPlayer.symbol)) {
      displayMessage.textContent = `${currentPlayer.name} (${currentPlayer.symbol}) wins!`;

      cells.forEach((cell) => {
        cell.removeEventListener("click", handleSymbols);
      });

      return;
    }

    if (tempArray.every((cell) => cell !== null)) {
      displayMessage.textContent = "It's a draw.";
      return;
    }

    // Ternary operator to swap the current player
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;

    displayMessage.textContent = `Now it's ${currentPlayer.name}'s turn (${currentPlayer.symbol})`;
  }

  function checkWin(symbol) {
    return winningCombinations.some((combination) => {
      return combination.every((index) => tempArray[index] === symbol);
    });
  }
}
