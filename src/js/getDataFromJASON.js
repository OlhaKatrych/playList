import { sortedSongs } from "./helper.js";

async function fetchData() {
  const response = await fetch(
    "https://olhakatrych.github.io/playList/array.json"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
export async function getDataSong() {
  const songs = await fetchData();
  return {
    songs: sortedSongs([...songs]),
    currentSong: null,
    songCurrentTime: 0,
  };
}
