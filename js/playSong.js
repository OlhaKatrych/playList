import { dataSong } from "../js/dataSong";

const audio = new Audio();
export const playSong = (id) => {
  const song = dataSong?.songs.find((song) => song.id === Number(id));
  audio.src = song.src;
  audio.title = song.title;

  if (dataSong.currentSong === null || dataSong.currentSong.id !== id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = dataSong.songCurrentTime;
  }
  dataSong.currentSong = song;
  audio.play();
};
