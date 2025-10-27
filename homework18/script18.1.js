const mins = 2;
const secs = 0;
let totalSeconds = mins * 60 + secs;
let intervalId;

const display = document.getElementById("timer");

function setTimer() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    display.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    totalSeconds--;

    if (totalSeconds < 0) {
        clearInterval(intervalId);
        intervalId = undefined;
    }
}

intervalId = setInterval(setTimer, 1000);