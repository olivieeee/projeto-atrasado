
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var blocos={
	restitution: 0.5,
	friction: 0.02, 
	frictionAir: 0
	}
	
	var blocos2={
	restitution: 0.7,
	friction: 0.01, 
	frictionAir: 0.1
	}
	var blocos3={
	restitution: 0.1,
	friction: 1, 
	frictionAir: 0.3
	}
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
bloco1.Bodies.circle(220, 10, 10, blocos);
World.add(World, bloco1);
bloco2.Bodies.rectangle(101, 50, 10, 10, blocos2);
World.add(World, bloco2);
bloco3.Bodies.rectangle(350, 50, 10, 10, blocos3);
World.add(World, bloco3)

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  
  drawSprites();

 
}



