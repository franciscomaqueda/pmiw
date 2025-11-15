let textos = [];
let imagenes = [];
let pantalla = 0;
let historial = [];
let intro;
let musculoso;

//consultar a diegod
function preload() {
  textos = loadStrings('data/textos.txt');
  intro = loadSound('data/intro.mp3');
  musculoso = loadSound('data/musculoso.mp3');


  for (let i = 0; i <= 40; i++) {
    imagenes[i] = loadImage("data/imagen"+i+".JFIF");
  }
}

function setup() {
  intro.setVolume(1.0); // máximo
  createCanvas(640, 480);
  intro.setLoop(false);
}


function draw() {
  
  

  
  background(255);

  
  
  
  if (imagenes[pantalla]) {
    image(imagenes[pantalla], 0, 0, width, height);
  }
  if (pantalla !== 0) {
    fondoDeTexto(textos[pantalla]);
  }

  if (pantalla === 1) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Le dicen que si y van a jugar a la play");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "Le dicen que si y van hacerlo");
  } else if (pantalla === 3) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Se quedan jugando una mas");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "Van hacer el trabajo");
  } else if (pantalla === 5) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Se quedan jugando una mas");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "Van hacer el trabajo");
  } else if (pantalla === 16) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Rigby");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "Mordecai");
  } else if (pantalla === 18) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Pedir ayuda a Papaleta");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "Pelear contra la IA");
  } else if (pantalla === 20) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Ir a una batalla musical");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "Seguir programando...");
  } else if (pantalla === 26) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Musculoso");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "Skipps");
  } else if (pantalla === 32) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Aceptan");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "No aceptan");
  }
}


 
function keyPressed() {
  // Si presionás cualquier tecla, pasa a la siguiente pantalla
  if (pantalla < imagenes.length - 1) {
    historial.push(pantalla); // guarda la pantalla actual
    pantalla++; // avanza una
  } else {
    pantalla = 0; // si llegás al final, vuelve al inicio (opcional)
    historial = [];
  }
 
  if (
  pantalla === 13 ||
  pantalla === 14 ||
  pantalla === 25 ||
  pantalla === 31 ||
  pantalla === 36 ||
  pantalla === 41) {
  reiniciarTodo();
}
 
}

function reproducirSonidoSegunPantalla() {
  if (pantalla === 0 && !intro.isPlaying()) {
    intro.play();
  } else if (pantalla !== 0 && intro.isPlaying()) {
    intro.stop();
  }

  if (pantalla === 28 && !musculoso.isPlaying()) {
    musculoso.play();
  } else if (pantalla !== 28 && musculoso.isPlaying()) {
    musculoso.stop();
  }
}


function mousePressed() {
  userStartAudio();
 


  let anchoBoton = 100;
  let altoBoton = 40;
  let yBoton = height - 60;
  let xSiguiente = width - 120;
  let xAtras = 20;

  //decision pantalla 1

  if (pantalla === 1) {
    let anchoBotonDes = 200;
    // Opcion 1 : van a jugar a la play
    if (detectarBoton(width/2 - 200, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(2);
      //opcion 2: le dicen que si y van hacerlo
    } else if (detectarBoton(width/2 + 20, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(15);
    }
    return ;
  }

  if (pantalla === 3) {
    let anchoBotonDes = 200;
    // Opcion 1 : juegan una mas
    if (detectarBoton(width/2 - 200, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(4);
      //opcion 2: van hacerlo
    } else if (detectarBoton(width/2 + 20, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(15);
    }
    return ;
  }


  if (pantalla === 5) {
    let anchoBotonDes = 200;
    // Opcion 1 : juegan una mas
    if (detectarBoton(width/2 - 200, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(6);
      //opcion 2: van hacerlo y los descubren
    } else if (detectarBoton(width/2 + 20, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(13);
    }
    return ;
  }

  if (pantalla === 16) {
    let anchoBotonDes = 200;
    // Opcion 1 :Rigby
    if (detectarBoton(width/2 - 200, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(17);
      //opcion 2: Mordecai
    } else if (detectarBoton(width/2 + 20, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(25);
    }
    return ;
  }

  if (pantalla === 18) {
    let anchoBotonDes = 200;
    // Opcion 1 : batalla de codigos
    if (detectarBoton(width/2 - 200, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(19);
      //opcion 2: pedir ayuda a papaleta
    } else if (detectarBoton(width/2 + 20, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(31);
    }
    return ;
  }


  if (pantalla === 20) {
    let anchoBotonDes = 200;
    // Opcion 1 : batalla musical
    if (detectarBoton(width/2 - 200, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(21);
      //opcion 2: IA LOS SUPERA, siguen peleando
    } else if (detectarBoton(width/2 + 20, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(37);
    }
    return ;
  }



  if (pantalla === 26) {
    let anchoBotonDes = 200;
    // Opcion 1 :musculoso
    if (detectarBoton(width/2 - 200, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(27);
      //opcion 2: skipps
    } else if (detectarBoton(width/2 + 20, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(29);
    }
    return ;
  }


  if (pantalla === 32) {
    let anchoBotonDes = 200;
    // Opcion 1 : aceptan
    if (detectarBoton(width/2 - 200, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(33);
      //opcion 2: rechazan
    } else if (detectarBoton(width/2 + 20, yBoton, anchoBotonDes, altoBoton)) {
      SiguientePantalla(36);
    }
    return ;
  }
    
}
