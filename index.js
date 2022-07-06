import { gamecountdown } from "./elements.js";

export async function waitFor3Seconds() {
  return new Promise((resolve) => {
    var countdownnumber = 3;
    var id = setInterval(() => {
      if (countdownnumber == 0) {
        gamecountdown.textContent = "TAP!!";
        setTimeout(() => {
          clearInterval(id);
          resolve(true);
        }, 500);
      } else {
        gamecountdown.textContent = countdownnumber;
        countdownnumber = countdownnumber - 1;
      }
    }, 1000);
  });
}
