import { sortedSongs } from "./helper.js";
import data from './array.json' with {type: 'json'};
export let dataSong = {
  songs: sortedSongs([...data]),
  currentSong: null,
  songCurrentTime: 0,
};
