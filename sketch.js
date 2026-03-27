function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 200, 200);
  
  // Cuerpo
  fill(250, 128, 114);
  noStroke();
  ellipse(200/2, 200/2, 200/2, 80/2);
  
  // Cola
  triangle(100/2, 200/2, 50/2, 170/2, 50/2, 230/2);
  
  // Lomo
  fill(199, 10, 15);
  ellipse(200/2, 180/2, 200/2, 40/2);
  
  // Ojo
  fill(0);
  ellipse(260/2, 190/2, 10/2, 10/2);
  
    // Cuerpo
  fill(250, 128, 114);
  noStroke();
  ellipse(200, 200, 200, 80);
  
  // Cola
  triangle(100, 200, 50, 170, 50, 230);
  
  // Lomo
  fill(199, 10, 15);
  ellipse(200, 180, 200, 40);
  
  // Ojo
  fill(0);
  ellipse(260, 190, 10, 10);
}