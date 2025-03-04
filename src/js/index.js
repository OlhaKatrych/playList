import { createMurkup } from "./createMarkup.js";
import { dataSongs, playButton } from "./playSong.js";
import { playButtonSong } from "./playButtonSong.js";
import { playNextSong, nextButton } from "./playNextSong.js";
import { previousButton, playPreviousSong } from "./playPreviousSong.js";
import { pauseButton, pauseSong } from "./pauseSong.js";
import { shuffleButton, shuffle } from "./shuffle.js";

createMurkup(dataSongs.songs);

playButton.classList.remove("play");
previousButton.classList.remove("previous");
nextButton.classList.remove("next");
pauseButton.classList.remove("pause");

playButton.addEventListener("click", playButtonSong);

pauseButton.addEventListener("click", pauseSong);

nextButton.addEventListener("click", playNextSong);

previousButton.addEventListener("click", playPreviousSong);

shuffleButton.addEventListener("click", shuffle);
