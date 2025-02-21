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
  const progressContainer = document.querySelector(".progress-container");

  if (!progressBar || !progressContainer) {
    console.error("progressBar or progressContainer not found!");
    return;
  }

  audio.src = song.src;
  audio.title = song.title;

  audio.onloadedmetadata = () => {
    console.log("Metadata loaded, duration:", audio.duration);
    if (!isNaN(audio.duration)) updateProgress(progressBar);
  };

  if (dataSongs.currentSong?.id !== id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = dataSongs.songCurrentTime;
  }
  dataSongs.currentSong = song;

  setPlayerDisplay();
  audio.play();

  // Видаляємо старі обробники
  audio.removeEventListener("timeupdate", updateProgress);
  progressContainer.removeEventListener("click", setProgress);
  audio.removeEventListener("ended", playNextSong);

  // Додаємо нові обробники
  audio.addEventListener("timeupdate", () => updateProgress(progressBar));
  progressContainer.addEventListener("click", (e) => {
    console.log("Progress clicked!");
    setProgress(e);
  });
  audio.addEventListener("ended", playNextSong);
};
