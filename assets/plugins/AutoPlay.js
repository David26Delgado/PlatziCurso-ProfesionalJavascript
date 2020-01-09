/**
 * Inicializando el objeto AutoPlay.
 *
 */
class AutoPlay {
  constructor() {}
  /**
   * Método para arrancar el vídeo.
   *
   * @param {MediaPlayer} player El reproductor/player.
   *
   * @return {void}
   */
  run(player) {
    if (!player.muted) {
      player.muted = true;
    }
    player.play();
  }
}

export default AutoPlay;
