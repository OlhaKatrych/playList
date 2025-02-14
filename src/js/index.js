import { getDataSong } from "./getDataFromJASON.js";
import { createMurkup } from "./createMarkup.js";
import { playSong } from "./playSong.js";

const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");

const audio = new Audio();
console.log(pauseButton);
const dataSongs = await getDataSong();
createMurkup(dataSongs.songs);
playButton.addEventListener("click", () => {
  if (dataSongs.currentSong === null) {
    playSong(dataSongs.songs[0].id);
  } else {
    playSong(dataSongs.currentSong.id);
  }
  playButton.classList.add("playing");
});

pauseButton.addEventListener("click", () => {
  dataSongs.songCurrentTime = audio.currentTime;
  playButton.classList.remove(".playing");
  audio.pause();
});
