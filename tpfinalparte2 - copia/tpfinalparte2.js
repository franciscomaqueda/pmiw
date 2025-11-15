
let objjuego;
let imgPersonaje, imgEnemigo, imgBalaEnemigo, imgBalaPersonaje;
let vidaEnemigo, vidaPersonaje;
let fondoJuego, imagenIntro, imagenDerrota, imagenWin, imagenCreditos, imagenInstrucciones;
let sonidoJuego, sonidoVictoria, sonidoDerrota, disparoEnemigo, disparoPersonaje;

function preload() {
  imgPersonaje = loadImage('data/imgPersonaje.png'); 
  imgEnemigo = loadImage('data/imgEnemigo.png'); 
  imgBalaPersonaje = loadImage('data/imgBalaPersonaje.png'); 
  imgBalaEnemigo = loadImage('data/imgBalaEnemigo.png'); 
  vidaEnemigo = loadImage('data/vidaEnemigo.png');
  vidaPersonaje = loadImage('data/vidaPersonaje.png');
  fondoJuego = loadImage('data/fondoJuego.png');
  imagenIntro = loadImage('data/imagenIntro.png');
  imagenDerrota = loadImage('data/imagenDerrota.png');
  imagenWin = loadImage('data/imagenWin.png');
  imagenCreditos = loadImage ('data/imagenCreditos.png');
  imagenInstrucciones = loadImage ('data/imagenInstrucciones.png');
  sonidoJuego = loadSound ('data/sonidoJuego.mp3');
  sonidoVictoria = loadSound('data/sonidoVictoria.mp3');
  sonidoDerrota = loadSound('data/sonidoDerrota.mp3');
}

function setup() {
  createCanvas(640, 480);
  objjuego = new Juego();
  
  objjuego.sonidos = new Sonidos
  (sonidoJuego, sonidoVictoria, sonidoDerrota);
}

function draw() {
  if (objjuego) objjuego.dibujarPantallas();
}

function keyPressed() {
  if (objjuego) objjuego.keyPressed();
}

function keyReleased() {
  if (objjuego) objjuego.keyReleased();
}

function mousePressed() {
  if (objjuego) objjuego.mousePressed();
}
