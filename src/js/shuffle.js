import { createMurkup } from "./createMarkup.js";
import { pauseSong } from "./pauseSong.js";
import { setPlayerDisplay } from "./setPlayerDisplay.js";
import { dataSongs } from "./playSong.js";

export const shuffleButton = document.querySelector(".shuffle");

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
export const shuffle = () => {
  const randomSongs = shuffleArray(dataSongs.songs);
  dataSongs.currentSong = null;
  dataSongs.songCurrentTime = 0;

  createMurkup(randomSongs);
  pauseSong();
  setPlayerDisplay();
};
