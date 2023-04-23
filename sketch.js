function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
  }
  
  function draw() {
    background(0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    
    stroke(color('#0f0'));
    fill(245, 1);
    box(100);
  }