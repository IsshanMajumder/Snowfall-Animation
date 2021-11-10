const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImage;

function preload() {
  bgImage = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800, 400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  snowFlake1 = new Snow(50, 0, 50, 50);
  snowFlake2 = new Snow(100, 0, 50, 50);
  snowFlake3 = new Snow(150, 0, 50, 50);
}

function draw() {
  background(bgImage);
  Engine.update(myEngine);
  snowFlake1.display();
  snowFlake2.display();
  snowFlake3.display();
}
