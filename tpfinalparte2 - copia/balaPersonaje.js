class balaPersonaje {
    constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.disparada = false;
  }
   dibujar(){
     if (this.disparada){
   
       image(imgBalaPersonaje, this.posX, this.posY, 40,40); 
        this.mover();
     }
}
  
  mover(){
    this.posY -= 5;
  }
  
  disparar(){
  this.disparada = true;
  }
  
}
