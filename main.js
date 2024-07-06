const gameBoardSection = document.querySelector("#game-board");

const startButton = gameBoardSection.querySelector("button[type='button']");

startButton.addEventListener("click", () => {
  const playersData = document.querySelector("#players-data");
  playersData.style.display = "block";
});
