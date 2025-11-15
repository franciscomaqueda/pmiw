class Sonidos {
  constructor(juego, victoria, derrota, disparoE, disparoP) {
    this.sonidoJuego = juego;
    this.sonidoVictoria = victoria;
    this.sonidoDerrota = derrota;
    

    // Configuración de volumen y loop
    this.sonidoJuego.setLoop(true);
    this.sonidoJuego.setVolume(0.6);
    this.sonidoVictoria.setVolume(0.8);
    this.sonidoDerrota.setVolume(0.8);
    
  }

  // Métodos para reproducir sonidos
  playJuego() {
    if (!this.sonidoJuego.isPlaying()) this.sonidoJuego.play();
  }

  stopJuego() {
    if (this.sonidoJuego.isPlaying()) this.sonidoJuego.stop();
  }

  playVictoria() {
    this.sonidoVictoria.play();
  }

  playDerrota() {
    this.sonidoDerrota.play();
  }

}
