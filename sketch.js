
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(400,height,800,40);

	lDustbin = new Dustbin(600,400,20,100);
	rDustbin = new Dustbin(780,400,20,100);
	bDustbin = new Dustbin(690,460,200,30);

	paper = new Paper(100,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  //container.display();
  ground.display();
  lDustbin.display();
  rDustbin.display();
  bDustbin.display();
  paper.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



