class Personaje{
  constructor(posX,posY){
    this.posX = posX;
    this.posY = posY;
    this.vidas = 3; 
    this.velocidad = 5;
    this.balaPersonaje = new balaPersonaje();
    
    // MOVIMIENTO DEL PERSONAJE 
  this.moviendoIzquierda = false;
  this.moviendoDerecha = false;
  this.moviendoArriba = false;
  this.moviendoAbajo = false;
  }
  
 dibujar() {
  // BALA Y PERSONAJE
  if (this.vivo === false) return;
  this.balaPersonaje.dibujar();
  image(imgPersonaje, this.posX, this.posY, 200, 250);

  // MOVIMIENTO
  if (this.moviendoIzquierda) {
    this.moverIzquierda();
  }
  if (this.moviendoDerecha) {
    this.moverDerecha();
  }
  if (this.moviendoArriba) {
    this.moverArriba();
  }
  if (this.moviendoAbajo) {
    this.moverAbajo();
  }
}   
  moverDerecha(){
    this.posX += this.velocidad;
    
    
  }
  
  moverIzquierda(){ 
     this.posX -= this.velocidad;
  }
  
  moverArriba(){
     if (this.posY > height / 2) {
    this.posY -= this.velocidad;
     }
 }
  
  moverAbajo(){
   this.posY += this.velocidad; 
  }
  
  teclaPresionada(key) {
  if (key === LEFT_ARROW)  this.moviendoIzquierda = true;
  if (key === RIGHT_ARROW) this.moviendoDerecha = true;
  if (key === UP_ARROW)    this.moviendoArriba = true;
  if (key === DOWN_ARROW)  this.moviendoAbajo = true;

  if (key === ENTER) this.dispararBalaPersonaje();
}

teclaSoltada(key) {
  if (key === LEFT_ARROW)  this.moviendoIzquierda = false;
  if (key === RIGHT_ARROW) this.moviendoDerecha = false;
  if (key === UP_ARROW)    this.moviendoArriba = false;
  if (key === DOWN_ARROW)  this.moviendoAbajo = false;
}
  
  
  estaVivo(){
  }
 
   matar() {
    this.vidas = 0;
  }
  
  dispararBalaPersonaje(){
      this.balaPersonaje = new balaPersonaje(this.posX, this.posY);
      this.balaPersonaje.disparar();
  }
  
  haDisparadoBalaPersonaje(){
   return  this.balaPersonaje.disparada;
}

   haTocadobalaEnemigo(balaEnemigo) {
  if (balaEnemigo.disparada) {
    if (dist(balaEnemigo.posX, balaEnemigo.posY, this.posX + 100, this.posY + 125) < 60)  {
      this.vidas--;
      balaEnemigo.disparada = false; // BALA DESPARECE AL IMPACTAR

      // BOOST POR ULTIMA VIDA
      if (this.vidas === 1) {
        this.velocidad = 8;
      }

      // MUERTE
      if (this.vidas <= 0) {
        this.vivo = false;
      }
     }
    }
   }
  }
