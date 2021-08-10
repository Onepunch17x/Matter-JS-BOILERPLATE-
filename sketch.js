const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground1;
var leftside;
var rightside;

function preload()
{
	
}

function setup() {
	createCanvas(1440, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(720,690,1440,50);
	leftside = new Ground(1100,600,20,120);
	rightside = new Ground(1400,600,20,120);

	//Create the Bodies Here.
	var ball_options = {
		isStatic : false,
		restitution :0.3 ,
		friction :0,
		density : 1.2
	}

	ball = Bodies.circle(200,100,30,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,30,30);
	ground1.display();
	leftside.display();
	rightside.display();
	keyPressd();

  drawSprites();
 
}

function keyPressd(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:3,y:15})
	}


}

