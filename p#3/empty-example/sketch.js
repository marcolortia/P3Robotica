
var vertices = [];
function setup() {  
  createCanvas(3500, 2200);
  background(" #ebf5fb ");
  nodos();//Llama a la funcion nodos
  conectar();
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
  //Canvas
  stroke('#000');
  noFill();
  rect(0, 0, 3500, 2000);
  //Robot   
  fill('#000');
  rect(410, 2050, 100, 140);
}
//Realiza arbol de expansión mínima y va uniendo los puntos rojos a su vez con lineas azules
function conectar() {
   var reached = []; //Nodos alcanzados
  var unreached = []; //Nodos no alcanzados
  for (var i = 0; i < vertices.length; i++) {
    unreached.push(vertices[i]); //Por ahora todos los nodos son NO alcanzados
  }
  reached.push(unreached[0]); //El primer nodo del arreglo será el primer  nodo alcanzado
  unreached.splice(0, 1); //Ese mismo nodo se borra de los NO alcanzados
  while (unreached.length > 0) { //Mientras haya elementos no alcanzados 
    var record = 1000; //Está será la distancia maxima con la que empezará a iterar
    var rIndex; //Coordenadas del nodo alcanzado
    var uIndex; //Coordenadas del nodo NO alcanzado
    for (var i = 0; i < reached.length; i++) { //En este for se checa la distancia con todos los puntos ye lije la minima
      for (var j = 0; j < unreached.length; j++) {
        var v1 = reached[i];
        var v2 = unreached[j];
        var d = dist(v1.x, v1.y, v2.x, v2.y); //Se calcula la distancia
        if (d < record) {
          record = d;
          rIndex = i; 
          uIndex = j;
        }
      }
    }
    stroke('blue');
    strokeWeight(5);
    line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x, unreached[uIndex].y);
    reached.push(unreached[uIndex]);
    unreached.splice(uIndex, 1);
  }
  //Dibuja los puntos
  for (var i = 0; i < vertices.length; i++) {
    stroke('red');
    point(vertices[i].x, vertices[i].y, 16, 16);
    strokeWeight(20);
  }




}

//Crea n vertices sin los puntos rojos
//Seccionamos las areas donde no hay colisiones y obtuvimos 15 areas de este tipo
// aleatoriamente decidimos en que area se van a colocar puntos aleatorios
//Mientras más puntos pongamos los caminos no tocaran las colisiones
function nodos() {
  nnodos = 100;
  for (var i = 0; i < nnodos; i++) {
    // fila= floor(random(1,8));
    // columna=floor(random(1,7));
    if (i == 0 || i == (nnodos-1)) {
      if(i==0){
        x1=70;
        y1=1910; 
        // console.log("primero"); 
      }
      else if(i==(nnodos-1))
      {
        x1=3410
        y1=370; 
        // console.log("ultimo"); 
      } 
          
    }
    else
    {
      seccion = floor(random(1, 16));
      switch (seccion) {
        case 1:
          x1 = constrain(random(width), 0, 550);
          y1 = constrain(random(height), 0, 1620);
          break;
        case 2:
          x1 = constrain(random(width), 140, 550);
          y1 = constrain(random(height), 1620, 2000);
          break;
        case 3:
          x1 = constrain(random(width), 910, 910);
          y1 = constrain(random(height), 210, 1620);
          break;
        case 4:
          x1 = constrain(random(width), 1270, 1270);
          y1 = constrain(random(height), 210, 1620);
          break;
        case 5:
          x1 = constrain(random(width), 1630, 1630);
          y1 = constrain(random(height), 210, 1620);
          break;
        case 6:
          x1 = constrain(random(width), 1990, 1990);
          y1 = constrain(random(height), 210, 1620);
          break;
        case 7:
          x1 = constrain(random(width), 2350, 2350);
          y1 = constrain(random(height), 210, 1620);
          break;
        case 8:
          x1 = constrain(random(width), 3260, 3500);
          y1 = constrain(random(height), 0, 2000);
          break;
        case 9:
          x1 = constrain(random(width), 610, 3319);
          y1 = constrain(random(height), 0, 140);
          break;
        case 10:
          x1 = constrain(random(width), 2350, 3260);
          y1 = constrain(random(height), 200, 440);
          break;
        case 11:
          x1 = constrain(random(width), 2450, 3199);
          y1 = constrain(random(height), 590, 590);
          break;
        case 12:
          x1 = constrain(random(width), 2460, 3190);
          y1 = constrain(random(height), 1040, 1040);
          break;
        case 13:
          x1 = constrain(random(width), 2460, 3190);
          y1 = constrain(random(height), 1400, 1400);
          break;
        case 14:
          x1 = constrain(random(width), 3320, 3500);
          y1 = constrain(random(height), 0, 300);
          break;
        case 15:
          x1 = constrain(random(width), 610, 3500);
          y1 = constrain(random(height), 1760, 2000);
          break;
        default:
          break;
      }    
      // console.log(seccion);
    }
    var v = createVector(x1, y1);
    vertices.push(v);
    // console.log(seccion);

  }


}
