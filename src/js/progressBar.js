import { audio } from "./playSong.js";

export const updateProgress = (progressBar) => {
  if (!progressBar) return; // Перевіряємо, чи існує елемент
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
  console.log("Оновлення прогресу:", progressPercent);
};
