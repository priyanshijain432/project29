  const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ground1,ground2;
var box11,box12,box13,box14,box15,box16;
var point, shooter;


function setup() {
  createCanvas(800,600);
  

  engine=Engine.create();
  world=engine.world;

  point = Bodies.rectangle(40,200,10,10);
  World.add(world,point)
 

 ground1 = new box(385,425,250,30);
 stroke("brown");
 strokeWeight(4);
 fill(105,146,17);

  box1 = new box(310,385,50,50);
  box2 = new box(360,385,50,50);
  box3 = new box(410,385,50,50);
  box4 = new box(460,385,50,50);
  box5 = new box(335,335,50,50);
  box6 = new box(385,335,50,50);
  box7 = new box(435,335,50,50);
  box8 = new box(360,285,50,50);
  box9 = new box(410,285,50,50);
  box10 = new box(385,235,50,50);

  ground2 = new ground(650,140,50,50);

  box11 = new box(700,180,195,25);
  box12 = new box(700,140,50,50);
  box13 = new box(750,140,50,50);
  box14 = new box(675,90,50,50);
  box15 = new box(725,90,50,50);
  box16 = new box(700,40,50,50);

  shooter = new slingShot(point.body,{x:50,y:200});

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rect(point.position.x,point.position.y,point.width,point.height);

  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();


  ground2.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  shooter.display();

  drawSprites();
}