import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const button = document.getElementById("togglePlay");
button.onclick = () => player.togglePlay();

const muteButton = document.getElementById("toggleMute");
muteButton.onclick = () => player.toggleMute();
