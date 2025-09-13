//https://youtu.be/y_tGvPAnq4I
let circulos;
let fondoOscuro = false; // true = fondo negro, lineas blancas
let mouseMovidoUnaVez = false; // para saber si el mouse se movió 

function preload(){ 
  circulos = loadImage ("./data/circulos.jpg");
}
function setup() {
createCanvas (800, 400);
background (255);
}

function draw() {
 // detecta movimiento del mouse
  if (mouseX > pmouseX) {
    fondoOscuro = true; // se mueve a la drc
  } else if (mouseX < pmouseX) {
    fondoOscuro = false; // se mueve a la izq
  }

  // ajusto los colores según la dirección que detectada
  if (fondoOscuro) {
    stroke(255); // líneas blancas
    fill(0);     // fondo del circulo negro 
  } else {
    stroke(0);   // líneas negras
    fill(255);   // fondo del circulo blanco 
}

keyPressed();
 
drawmyCircles();
image (circulos, 0, 0, 400, 400);   

  }

function mousePressed(){
  reiniciar();
}

function reiniciar() {
  fondoOscuro = false;
  mouseMovidoUnaVez = false;
  background(255);
  drawmyCircles();
}
// función para detectar el movimiento del mouse.
function mouseMoved() {
  mouseMovidoUnaVez = true; // Establece la bandera en 'true' tan pronto como el mouse se mueve
}

//los circulos cambian por colores determinados 
function keyPressed() {
  //la tecla puede ser minuscula o mayuscula 
  if ((keyIsPressed ==false) && (key == 'g'|| key == 'G')) {
    mouseMovidoUnaVez = false;  
    fill(0,255,0);
    strokeWeight(2);
   }else if ((keyIsPressed ==false) && (key == 'b'|| key == 'B')){
     mouseMovidoUnaVez = false;
     fill(0,0,255);
    strokeWeight(2);
  }else if ((keyIsPressed ==false) && (key == 'r'|| key == 'R')){
    mouseMovidoUnaVez = false;
    fill(255,0,0);
    strokeWeight(2);
  }else if ((keyIsPressed ==false) && (key == 'y'|| key == 'Y')){
    mouseMovidoUnaVez = false;
    fill(252,252,3);
    strokeWeight(2);
  }else if ((keyIsPressed ==false) && (key == 'v'|| key == 'V')){
    mouseMovidoUnaVez = false;
    reiniciar();
    strokeWeight(2);
  } 
  
}  
//funcion que crea todos los circulos de la imagen 
function drawmyCircles() { 
  myCircle(650,200,750,50,10); //circulo fondo
  myCircle(730,260,140,12,2); //circulo mediano-chico centro drc
  myCircle(675,135,240,25,4);  //circulo mediano-grande arriba drc
  myCircle(670,375,190,15,3); // circulo mediano-grande abajo drc
  myCircle(510,260,320,30,6); //circulo mediano-grande centro izq
  myCircle(470,70,170,15,3); //circulo mediano arriba izq
  myCircle(570,55,95,8,2); //circulo chico arriba izq
 
  if (mouseMovidoUnaVez) {
    rellenoDegradePot();
  }else {
    myCircle(620,200,290,26,6); //primer circulo
  }
} 

function myCircle(x, y, talle, paso, trazo) {
 for (let i= talle; i > 0; i -= paso) {
  strokeWeight(trazo);
  
  if (dist(mouseX, mouseY, x, y) < i / 2) {
      i += 5; // aumenta el tamaño si el mouse está sobre el círculo
    } 
  
  ellipse(x, y, i, i);
 }
} 

function rellenoDegradePot() {  
  // Establesco el centro y el tamaño del circulo principal
  let posX = (width / 2) + 220; // desplazo el centro del eje X para que concuerde con la imagen
  let posY = height / 2; 
  let radio = 145; 
  
  fill(255);
  ellipse(posX, posY, 290, 290);  
  for (let y = posY - radio; y <= posY + radio; y += 10) {
    for (let x = posX - radio; x <= posX + radio; x += 10) {
      // Solo dibuja si el punto está dentro del círculo
      let d = dist(x, y, posX, posY);
      if (d <= radio) {
        fill((x + y) * 0.25); // Degradado suave
        ellipse(x, y, 6, 6); // Dibuja los puntos dentro del circulo 
      }
    }
  }
}
