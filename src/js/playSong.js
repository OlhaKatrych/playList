import { getDataSong } from "./getDataFromJASON.js";
import { setPlayerDisplay } from "./setPlayerDisplay.js";
import { playNextSong } from "./playNextSong.js";

export const audio = new Audio();
export const dataSongs = await getDataSong();

export const playButton = document.querySelector(".play");
export const playSong = (id) => {
  const song = dataSongs.songs.find((song) => song.id === id);

  audio.controls = true;
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
  audio.addEventListener("ended", playNextSong);
};
