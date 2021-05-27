const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  polygon1 = new Polygon(150,400,50,50);

  //pyramid1
  blockA1 = new Block(400,275,30,40);
  blockA2 = new Block(430,275,30,40);
  blockA3 = new Block(460,275,30,40);
  blockA4 = new Block(490,275,30,40);
  blockA5 = new Block(520,275,30,40);
  blockA6 = new Block(550,275,30,40);
  blockA7 = new Block(580,275,30,40);
  blockA8 = new Block(430,235,30,40);
  blockA9 = new Block(460,235,30,40);
  blockA10 = new Block(490,235,30,40);
  blockA11 = new Block(520,235,30,40);
  blockA12 = new Block(550,235,30,40);
  blockA13 = new Block(460,195,30,40);
  blockA14 = new Block(490,195,30,40);
  blockA15 = new Block(520,195,30,40);
  blockA16 = new Block(490,155,30,40);
  stand1 = new Stand(490,300,250,10);

  //pyramid2
  blockB1 = new Block(850,475,30,40);
  blockB2 = new Block(880,475,30,40);
  blockB3 = new Block(910,475,30,40);
  blockB4 = new Block(940,475,30,40);
  blockB5 = new Block(970,475,30,40);
  blockB6 = new Block(1000,475,30,40);
  blockB7 = new Block(1030,475,30,40);
  blockB8 = new Block(880,435,30,40);
  blockB9 = new Block(910,435,30,40);
  blockB10 = new Block(940,435,30,40);
  blockB11 = new Block(970,435,30,40);
  blockB12 = new Block(1000,435,30,40)  
  blockB13 = new Block(910,395,30,40);
  blockB14 = new Block(940,395,30,40);
  blockB15 = new Block(970,395,30,40);
  blockB16 = new Block(940,355,30,40);
  stand2 = new Stand(940,500,250,10);

  slingshot1 = new Slingshot(polygon1.body, {x:130,y:380})
}
function draw() {
  background(56,44,44); 
 
  textSize(20); 
  polygon1.display();
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  blockA1.display();
  blockA2.display();
  blockA3.display();
  blockA4.display();
  blockA5.display();
  blockA6.display();
  blockA7.display();

  blockB1.display();
  blockB2.display();
  blockB3.display();
  blockB4.display();
  blockB5.display();
  blockB6.display();
  blockB7.display();


  blockA8.display();
  blockA9.display();
  blockA10.display();
  blockA11.display();
  blockA12.display();

  blockB8.display();
  blockB9.display();
  blockB10.display();
  blockB11.display();
  blockB12.display();


  blockA13.display();
  blockA14.display();
  blockA15.display();

  blockB13.display();
  blockB14.display();
  blockB15.display();

  
  blockA16.display();

  blockB16.display(); 

  slingshot1.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{ x: mouseX, y: mouseY });
}

function mouseReleased(){
  slingshot1.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot1.attach(polygon1.body)
  }
}
