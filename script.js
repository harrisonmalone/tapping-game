import { waitFor3Seconds } from "./index.js";
import {
  gameOverText,
  h1,
  startButton,
  clicker,
  totalAmount,
  gameContent,
  countdownText,
  playAgain,
  highscore,
  button,
  score,
  gamecountdown,
} from "./elements.js";

var countdown = 10;
startButton.addEventListener("click", async () => {
  await waitFor3Seconds();
  gamecountdown.style.display = "none";
  button.style.display = "flex";
  var counter = 0;
  clicker.addEventListener("click", () => {
    counter = counter + 1;
    totalAmount.textContent = `${counter}`;
  });
  var id = setInterval(() => {
    if (countdown == 0) {
      var previousHighscoreData = localStorage.getItem("highscore");
      score.textContent = `Score: ${counter}`;
      if (counter > previousHighscoreData) {
        localStorage.setItem("highscore", counter);
        highscore.style.display = "block";
        highscore.textContent = `Highscore: ${counter}`;
      } else {
        highscore.style.display = "block";
        highscore.textContent = `Highscore: ${previousHighscoreData}`;
      }
      h1.style.display = "none";
      gameContent.style.display = "none";
      gameOverText.style.display = "block";
      playAgain.style.display = "block";
      clearInterval(id);
    } else {
      countdownText.textContent = `${countdown} seconds`;
      console.log(countdown);
      countdown = countdown - 1;
    }
  }, 1000);
});
playAgain.addEventListener("click", () => {
  location.reload();
});
