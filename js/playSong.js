import { getDataSong } from "./getDataFromJASON.js";

const audio = new Audio();

const dataSongs = await getDataSong();
export const playSong = (id) => {
  const song = dataSongs.songs.find((song) => song.id === Number(id));
  audio.src = song.src;
  audio.title = song.title;

  if (dataSongs.currentSong === null || dataSongs.currentSong.id !== id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = dataSongs.songCurrentTime;
  }
  dataSongs.currentSong = song;
  audio.play();
};
