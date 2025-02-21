import { getDataSong } from "./getDataFromJASON.js";
import { setPlayerDisplay } from "./setPlayerDisplay.js";
import { playNextSong } from "./playNextSong.js";
import { updateProgress } from "./progressBar.js";
export const audio = new Audio();
export const dataSongs = await getDataSong();

export const playButton = document.querySelector(".play");
export const playSong = (id) => {
  const song = dataSongs.songs.find((song) => song.id === id);

  const progressBar = document.querySelector(`#song-${id} .progress-bar`);
  if (!progressBar) {
    console.error("progressBar is not found for track:", id);
    return;
  }
  console.log(progressBar)
  audio.src = song.src;
  audio.title = song.title;

  if (dataSongs.currentSong === null || dataSongs.currentSong.id !== id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = dataSongs.songCurrentTime;
  }
  dataSongs.currentSong = song;
  setPlayerDisplay();
  audio.play();
  // Removing old handlers to avoid duplication
  audio.removeEventListener("timeupdate", updateProgress);
  audio.removeEventListener("ended", playNextSong);
  // Adding new handlers
  audio.addEventListener("timeupdate", () => updateProgress(progressBar));
  audio.addEventListener("ended", playNextSong);
};
