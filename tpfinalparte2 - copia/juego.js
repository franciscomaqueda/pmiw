class Juego {
  constructor() {
    // Variables
    this.estado = "intro";
    this.tiempoVictoria = 0;
    this.instruccionesIniciadas = false; // controlar temporizador de instrucciones

    this.crearPersonaje();
    this.crearEnemigo();

    // Arreglo de pantallas 
    this.pantallas = [
      imagenIntro,
      imagenInstrucciones,
      fondoJuego,
      imagenWin,
      imagenDerrota,
      imagenCreditos
      ];
  }
//Pantallas: Intro
  dibujarPantallas() {
    if (this.estado === "intro") {
      image(this.pantallas[0], 0, 0, width, height);

//Sonidos
      if (sonidoJuego.isPlaying()) sonidoJuego.stop();
      if (sonidoDerrota.isPlaying()) sonidoDerrota.stop();
      if (sonidoVictoria.isPlaying()) sonidoVictoria.stop();
//instrucciones
    } else if (this.estado === "instrucciones") {
      image(this.pantallas[1], 0, 0, width, height);

      // Iniciar contador de 5 segundos solo una vez
      if (!this.instruccionesIniciadas) {
        this.tiempoInstrucciones = millis();
        this.instruccionesIniciadas = true;
      }
      //Freno el contador     
      if (millis() - this.tiempoInstrucciones > 5000) {
        this.estado = "jugando";
        this.crearPersonaje();
        this.crearEnemigo();
        this.instruccionesIniciadas = false; 
      }
//Jugando
    } else if (this.estado === "jugando") {
      image(this.pantallas[2], 0, 0, width, height);
      this.dibujar();
      if (!sonidoJuego.isPlaying()) sonidoJuego.play();

      if (this.enemigo.vidas <= 0) {
        this.estado = "win";
        this.tiempoVictoria = millis();
        sonidoJuego.stop();
        sonidoVictoria.play();
      }
      if (this.Personaje.vidas <= 0) {
        this.estado = "derrota";
        sonidoJuego.stop();
        sonidoDerrota.play();
      }
//Victoria
    } else if (this.estado === "win") {
      image(this.pantallas[3], 0, 0, width, height);
      if (millis() - this.tiempoVictoria > 5000) {
        this.estado = "creditos";
        sonidoVictoria.stop();
        sonidoJuego.play();
      }
//Derrota
    } else if (this.estado === "derrota") {
      image(this.pantallas[4], 0, 0, width, height);
//Creditos
    } else if (this.estado === "creditos") {
      image(this.pantallas[5], 0, 0, width, height);
    }
  }

//Botones
  mousePressed() {
    if (this.estado === "intro") {
      if (mouseX > 160 && mouseX < 485 && mouseY > 265 && mouseY < 355) {
        this.estado = "instrucciones"; // pasar a instrucciones
        this.instruccionesIniciadas = false; // asegurarse de iniciar contador
      }
    }

    if (this.estado === "derrota") {
      if (mouseX > 128 && mouseX < 512 && mouseY > 223 && mouseY < 251) {
        this.estado = "intro";
        this.crearPersonaje();
        this.crearEnemigo();
      }
    }

    if (this.estado === "creditos") {
      if (mouseX > 350 && mouseX < 574 && mouseY > 413 && mouseY < 432) {
        this.estado = "intro";
        this.crearPersonaje();
        this.crearEnemigo();
      }
    }
  }
//Disparos y movimiento
  keyPressed() {
    if (this.estado === "jugando") this.Personaje.teclaPresionada(keyCode);
  }

  keyReleased() {
    if (this.estado === "jugando") this.Personaje.teclaSoltada(keyCode);
  }

  dibujar() {
    this.Personaje.dibujar();
    this.enemigo.dibujar();
    this.controlarDisparosAEnemigos();
    this.controlarDisparosAJugador();
    this.mostrarVidas();
  }

  crearPersonaje() {
    this.Personaje = new Personaje(320, 250);
  }

  crearEnemigo() {
    this.enemigo = new enemigo(320, 50);
  }

  controlarDisparosAEnemigos() {
    if (this.Personaje.balaPersonaje.disparada) {
      this.enemigo.haSidoGolpeado(this.Personaje.balaPersonaje);
    }
  }

  controlarDisparosAJugador() {
    if (this.enemigo.bala && this.enemigo.bala.disparada) {
      this.Personaje.haTocadobalaEnemigo(this.enemigo.bala);
    }
  }

  mostrarVidas() {
    for (let i = 0; i < this.enemigo.vidas; i++) {
      image(vidaEnemigo, 10 + i * 40, 10, 30, 30);
    }
    for (let i = 0; i < this.Personaje.vidas; i++) {
      image(vidaPersonaje, width - (i + 1) * 40 - 10, 10, 30, 30);
    }
  }
}
