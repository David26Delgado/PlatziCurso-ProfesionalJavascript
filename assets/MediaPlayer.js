class MediaPlayer {
  /**
   * Inicializando el objeto MediaPlayer.
   *
   * @param {Object} config Configuración general para el player.
   */
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
  }

  /**
   * Método para inicializar los plugins.
   *
   * @return {void}
   */
  _initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  /**
   * Método para reproducir el vídeo.
   *
   * @return {void}
   */
  play() {
    this.media.play();
  }

  /**
   * Método para pausar el vídeo.
   *
   * @return {void}
   */
  pause() {
    this.media.pause();
  }

  /**
   * Método para reproducir/pausar el vídeo.
   *
   * @return {void}
   */
  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  /**
   * Método para silenciar el vídeo.
   *
   * @return {void}
   */
  mute() {
    this.media.muted = true;
  }

  /**
   * Método para quitar el silencio al vídeo.
   *
   * @return {void}
   */
  unmute() {
    this.media.muted = false;
  }

  /**
   * Método para silenciar/no silenciar el vídeo.
   *
   * @return {void}
   */
  toggleMute() {
    this.media.muted = !this.media.muted;
  }
}

export default MediaPlayer;
