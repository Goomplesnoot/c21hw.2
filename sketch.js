
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground
var leftside
var rightside
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction:0,
		density:1.2

	}
	//Create the Bodies Here.
	ball= Bodies.circle(200,200,20,ball_options)
	World.add(world,ball)
	ground = new Ground(690,400,800,20);
	rightside = new Ground(width/2,670,width,20);
	leftside = new Ground(1100,600,20,120);
	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  leftside.display()
  rightside.display()
  keyPressed()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
	}
}


