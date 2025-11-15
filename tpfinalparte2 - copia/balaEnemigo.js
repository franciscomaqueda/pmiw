class balaEnemigo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.disparada = false;
  }

  dibujar() {
    if (this.disparada) {
      image(imgBalaEnemigo, this.posX, this.posY, 40, 40);
      this.mover();
    }
  }

  mover() {
    this.posY += 5; // baja hacia el personaje
    if (this.posY > height) {
      this.disparada = false; // se apaga cuando sale de pantalla
    }
  }

  disparar() {
    this.disparada = true;
  }
}
