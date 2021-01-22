
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
            	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Engine.run(engine);

roof1=new Roof(400,100,450,15)


bob1=new Bob(200,300,2);
bob2=new Bob(210,300,2);
bob3=new Bob(220,300,2);
bob4=new Bob(230,300,2);
bob5=new Bob(240,300,2);

rope1=new rope(bob1.body,{x:200,y:100})
rope2=new rope(bob2.body,{x:210,y:100})
rope3=new rope(bob3.body,{x:220,y:100})
rope4=new rope(bob4.body,{x:230,y:100})
rope5=new rope(bob5.body,{x:240,y:100})
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  


bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
roof1.display();
  drawSprites();
 
}



