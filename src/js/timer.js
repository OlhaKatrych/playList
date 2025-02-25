import { audio } from "./playSong.js";

let countdownInterval;
let totalDuration = 0;

export const setTotalDuration = (duration) => {
  totalDuration = duration;
};

const updateTimer = (timerDisplay) => {
  if (!timerDisplay) return;

  const remainingTime = Math.max(totalDuration - audio.currentTime, 0);
  const minutes = Math.floor(remainingTime / 60);
  const seconds = Math.floor(remainingTime % 60);

  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

export const startCountdown = (timerDisplay) => {
  clearInterval(countdownInterval);

  if (!totalDuration || totalDuration === 0) {
    totalDuration = isNaN(audio.duration) ? 0 : audio.duration;
  }

  updateTimer(timerDisplay);
  countdownInterval = setInterval(() => updateTimer(timerDisplay), 1000);
};

export const stopCountdown = () => {
  clearInterval(countdownInterval);
};
