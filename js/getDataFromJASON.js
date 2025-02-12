import { sortedSongs } from "./helper.js";

async function fetchData() {
  const response = await fetch("/array.json");

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  return data;
}
export async function getDataSong() {
  const songs = await fetchData();
  console.log(songs);
  return {
    songs: sortedSongs([...songs]),
    currentSong: null,
    songCurrentTime: 0,
  };
}
