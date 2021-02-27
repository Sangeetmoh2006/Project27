
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(600,100,800,20);
	bobObject1 = new Bob(125,100);
	bobObject2 = new Bob(225,100);
	bobObject3 = new Bob(325,100);
	bobObject4 = new Bob(425,100);
	bobObject5 = new Bob(525,100);
	bobDiameter = 40
	rope1 = new Rope(bobObject1.body, roof1.body, 0, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites();
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();

  //line(rope1.position.x,rope1.position.y,Anchor2X,Anchor2Y);
}