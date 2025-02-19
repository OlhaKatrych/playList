import { dataSongs } from "./playSong.js";

const playingSongTitle = document.querySelector(".player-song-title");

export const setPlayerDisplay = () => {
  const currentSongTitle = dataSongs.currentSong?.title;
  playingSongTitle.textContent = currentSongTitle ? currentSongTitle : "";
};
