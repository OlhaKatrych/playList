import { getDataSong } from "./getDataFromJASON.js";
import { setPlayerDisplay } from "./setPlayerDisplay.js";
import { playNextSong } from "./playNextSong.js";
import { updateProgress, setProgress } from "./progressBar.js";

export const audio = new Audio();
export const dataSongs = await getDataSong();

export const playButton = document.querySelector(".play");

export const playSong = (id) => {
  const song = dataSongs.songs.find((song) => song.id === id);
  const progressBar = document.querySelector(`#song-${id} .progress-bar`);
  const progressContainer = document.querySelector(
    `#song-${id} .progress-container`
  );
  console.log(progressContainer);
  if (!progressBar || !progressContainer) {
    console.error("progressBar or progressContainer not found!");
    return;
  }

  const isSameSong = dataSongs.currentSong?.id === id;
  audio.src = song.src;
  audio.load();
  audio.title = song.title;

  audio.onloadedmetadata = () => {
    console.log("Metadata loaded, duration:", audio.duration);
    if (!isNaN(audio.duration)) {
      updateProgress(progressBar);
      if (isSameSong && dataSongs.songCurrentTime) {
        audio.currentTime = dataSongs.songCurrentTime;
      } else {
        audio.currentTime = 0;
      }
      audio.play().catch((err) => console.log("Error playing:", err));
    }
  };

  dataSongs.currentSong = song;

  setPlayerDisplay();

  // Видаляємо старий обробник перед додаванням нового
  if (window.currentProgressContainer) {
    console.log("Removing old event listener");
    window.currentProgressContainer.removeEventListener("click", setProgress);
  }
  window.currentProgressContainer = progressContainer;
  console.log("New progressContainer set");

  audio.removeEventListener("timeupdate", updateProgress);
  audio.removeEventListener("ended", playNextSong);

  // Додаємо нові обробники
  audio.addEventListener("timeupdate", () => updateProgress(progressBar));
  progressContainer.addEventListener("click", setProgress);
  console.log("Event listener added to progressContainer");
  audio.addEventListener("ended", playNextSong);
};
