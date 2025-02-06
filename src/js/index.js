import allSongs from "./array.json";
import { createMurkup } from "./createMarkup";
import { sortedSongs } from "./helper";

const audio = new Audio();
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};

createMurkup(sortedSongs(allSongs));
