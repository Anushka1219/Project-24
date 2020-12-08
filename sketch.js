
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var drop, dropImage;
var wall1, wall2, wall3;
var ground1, ball;


function preload()
{
	dropImage=loadImage("OIP.jpg")
}

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//drop=createSprite(200,0,800,800);
	//drop.scale=3;
	//drop.addImage(dropImage);

	
ground1 = new Ground(0,290,1800,20);

	wall1 = new Box(500,260,20,150);
	wall2 = new Box(600,270,180,20);
	wall3 = new Box(700,260,20,150);
	

ball = new Ball(200,200,50)


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background("skyblue");

 // drop.display();
  wall1.display();
wall2.display();
wall3.display();
  ground1.display();
  ball.display();

  if(keyDown("space")){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y:-30})
  }
  
  
  drawSprites();

  textSize(20);
 fill("purple");
  text("Press Space to throw the wrapper in dustbin",10,50);
}



