
var vertices=[];
function setup() {
    // put setup code here  
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
     //Robot   
     fill('#000');
     rect(410, 2050, 100, 140);
    
    

     


   }

function conectar(){

  var reached=[];
  var unreached=[];
  for (var i=0; i< vertices.length;i++)
  {
  unreached.push(vertices[i])
  }
  reached.push(unreached[0]);
  unreached.splice(0, 1);
  while(unreached.length>0)
  {
  var record=10000;
    var rIndex;
    var uIndex;
    for(var i=0; i<reached.length;i++)
    {
      for (var j=0;j<unreached.length;j++)
      {
        var v1= reached[i];
        var v2=unreached[j];
        var d=dist(v1.x,v1.y,v2.x,v2.y);
        if(d<record)
          {
            record=d;
            rIndex=i;
            uIndex=j;
          }
      }
    }
    stroke('blue');
    strokeWeight(5);
    line(reached[rIndex].x,reached[rIndex].y,unreached[uIndex].x,unreached[uIndex].y);
    reached.push(unreached[uIndex]);
    unreached.splice(uIndex, 1);
  }
  //Dibuja los puntos
  for(var i=0;i<vertices.length;i++)
  {   
    stroke('red');
    point(vertices[i].x,vertices[i].y,16,16);
    strokeWeight(20);
  }




}

//Crea 100 vertices sin los puntos rojos
  function nodos()
  {
    for(var i=0; i<100;i++)
    {
    var v= createVector(random(width),random(height));
    vertices.push(v);
    }

  }
  