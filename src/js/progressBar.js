import { audio } from "./playSong.js";

export const updateProgress = (progressBar) => {
  if (!progressBar) return;
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
};

export const setProgress = (e) => {
  const progressContainer = e.currentTarget;
  
  const width = progressContainer.clientWidth;
  const clickX = e.clientX - progressContainer.getBoundingClientRect().left;
  const duration = audio.duration;

  if (isNaN(audio.duration) || audio.readyState < 2) {
    console.warn("Аудіо ще не завантажене, duration:", audio.duration);
    return;
  }

  const newTime = (clickX / width) * duration;

  audio.pause();
  audio.addEventListener("canplaythrough", function onCanPlayThrough() {
    audio.currentTime = newTime;
    audio.play().catch((error) => console.log("Error playing:", error));
    audio.removeEventListener("canplaythrough", onCanPlayThrough);
  });
};
