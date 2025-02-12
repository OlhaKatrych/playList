import { sortedSongs } from "./helper.js";

async function fetchData() {
  const response = await fetch("../array.json");
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return sortedSongs([...data]);
}

export async function getDataSong() {
  const songs = await fetchData();
  console.log(songs);
  return {
    songs,
    currentSong: null,
    songCurrentTime: 0,
  };
}
