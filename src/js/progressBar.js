import { audio } from "./playSong.js";
export const progressContainer = document.querySelector(".progress-container");
export const progressBar = document.querySelector(".progress-bar");
export const updatedProgressBar = () => {
  if (audio.duration) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    //progressBar.style.width = `${progressPercent}%`;
  }
};

export const setProgress = (e) => {
  const containerWidth = progressContainer.offsetWidth; // Ширина контейнера
  const clickX = e.offsetX; // Позиція кліку відносно контейнера
  const newTime = (clickX / containerWidth) * audio.duration; // Новий час треку
  audio.currentTime = newTime; // Задаємо новий час відтворення
};
