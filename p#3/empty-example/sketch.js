

// Crear variables globales que alacenen las coordenadas de los obstaculos



function setup() {
    // put setup code here  
    createCanvas(3500, 2200); 
    background(" #ebf5fb ");
  }
  
  function draw() {
    // Verticales
    //Punto de entrada de material
    strokeWeight(4);
    stroke('#000');
    fill('#EEE');
    rect(0, 1820, 140, 180);
    // Anaquel 1   
    stroke('#000');
    fill('#EEE');
    rect(610, 200, 240, 1500);
    // Anaquel 2
    stroke('#000');
    fill('#EEE');
    rect(970, 200, 240, 1500);
    // Anaquel 3
    stroke('#000');
    fill('#EEE');
    rect(1330, 200, 240, 1500);
    // Anaquel 4
    stroke('#000');
    fill('#EEE');
    rect(1690, 200, 240, 1500);
    // Anaquel 5
    stroke('#000');
    fill('#EEE');
    rect(2050, 200, 240, 1500);
    // Horizontales
    // Anaquel 6 
    stroke('#000');
    fill('#EEE');
    rect(2450, 740, 750, 240);
    // Anaquel 7
    stroke('#000');
    fill('#EEE');
    rect(2450, 1100, 750, 240);
    // Anaquel 8
    stroke('#000');
    fill('#EEE');
    rect(2450, 1460, 750, 240);
    //Punto de salida de material
    stroke('#000');
    fill('#EEE');
    rect(3320, 300, 180, 140);
     //Robot   
     fill('#000');
     rect(410, 2050, 100, 140);
   }





function MaterialDejar (){
  // Ingresamos la ubicación de nuestro material a dejar

}

function MaterialSalida () {
  // Ingresamos la ubicación de nuestro material a sacar del almacén

}


function ValidaObtaculo( x1,x2,x3,x4){
  // Validar si la coordenada ingresada no choque con ningun obsstaculo
  
}


function RRT () {
  //Algoritmo que calcula la ruta
  
}

function DibujaCamino () {
  //Traza la ruta optima generada

}