import { getDataSong } from "./getDataFromJASON.js";
import { setPlayerDisplay } from "./setPlayerDisplay.js";
import { playNextSong } from "./playNextSong.js";
import { updateProgress, setProgress } from "./progressBar.js";
import { startCountdown, setTotalDuration, stopCountdown } from "./timer.js";

export const audio = new Audio();

export const dataSongs = await getDataSong();

export const playButton = document.querySelector(".play");

export const playSong = (id) => {
  const song = dataSongs.songs.find((song) => song.id === id);
  const progressBar = document.querySelector(`#song-${id} .progress-bar`);
  const progressContainer = document.querySelector(
    `#song-${id} .progress-container`
  );
  const timerDisplay = document.querySelector(
    `#song-${id} .playlist-song-duration`
  );

  if (!progressBar || !progressContainer || !timerDisplay) {
    console.error(
      "There are not found progressBar or  progressContainer or timerDisplay"
    );
    return;
  }

  const isSameSong = dataSongs.currentSong?.id === id;

  stopCountdown(); // Stopping timer the previous track before playing the new one

  audio.src = song.src;
  audio.load();
  audio.title = song.title;

  audio.onloadedmetadata = () => {
    console.log(`Metadata loaded for ${song.title}, duration:`, audio.duration);

    if (!isNaN(audio.duration)) {
      setTotalDuration(audio.duration); // Passing audio.duration to timer.js
      updateProgress(progressBar);

      if (isSameSong && dataSongs.songCurrentTime) {
        audio.currentTime = dataSongs.songCurrentTime;
      } else {
        audio.currentTime = 0;
      }

      audio.play().catch((error) => console.log("Error playing:", error));
      startCountdown(timerDisplay); // Passing the timer to timer.js
    }
  };
 
  dataSongs.currentSong = song;

  // Setting the song's title to the display

  setPlayerDisplay();

  // Removing old handlers
  audio.removeEventListener("timeupdate", updateProgress);
  audio.removeEventListener("ended", playNextSong);

  // Adding new handlers
  audio.addEventListener("timeupdate", () => updateProgress(progressBar));
  progressContainer.addEventListener("click", setProgress);
  audio.addEventListener("ended", playNextSong);
};
