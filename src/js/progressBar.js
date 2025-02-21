import { audio } from "./playSong.js";

export const updateProgress = (progressBar) => {
  if (!progressBar) return;
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
};

export const setProgress = (e) => {
  const progressContainer = e.currentTarget;
  console.log(progressContainer);

  const width = progressContainer.clientWidth;
  console.log(width);

  const clickX = e.offsetX;
  console.log(clickX);

  const duration = audio.duration;
  console.log(duration);

  if (isNaN(duration)) return;

  const newTime = (clickX / width) * duration;
  audio.currentTime = newTime;

  console.log(`Клік: ${clickX}px, Новий час: ${audio.currentTime}s`);
};
