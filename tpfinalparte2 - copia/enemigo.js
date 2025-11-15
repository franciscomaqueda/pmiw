class enemigo{
 constructor(posX,posY){
    this.posX = posX ;
    this.posY = posY ;
    this.vidas = 5; 
    this.velocidad = 0.005;      
    this.bala = new balaEnemigo(this.posX, this.posY);
  }
  
   dibujar(){
     if(this.vidas > 0){
       this.mover();  
       image(imgEnemigo, this.posX, this.posY, 100,100); 
       this.dispararAleatoriamente();
       this.bala.dibujar()
  }
   }
  mover() {
  this.posX = 640 * noise(this.velocidad * frameCount * 2);
  this.posY = 300 * noise(this.velocidad * frameCount * 2 + 10000);
  }
  
  dispararAleatoriamente() {
  let azar = random(100);
  if (azar < 5 && !this.bala.disparada) {
    this.bala = new balaEnemigo(this.posX + 50, this.posY + 100);
    this.bala.disparar();
  }
}
  
  
  matar(){
     this.vidas = 0;
  }
  
  
  
  
    haSidoGolpeado(balaPersonaje) {
      if (balaPersonaje.disparada) {
        if (dist(balaPersonaje.posX, balaPersonaje.posY, this.posX, this.posY) < 50) {
          this.vidas--;
          balaPersonaje.disparada = false; 
         
         if (this.vidas === 3) {
            this.velocidad = 0.01; 
          }
        }
      }
    }
}
