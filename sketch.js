
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
var canvas=		createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	log1=new Log(550,620,20,100)
	log2=new Log(610,660,100,20)
	log3=new Log(670,620,20,100)
	ball1=new Ball(100,600,10)
	ground1=new Ground(400,680,800,20)


	//Create the Bodies Here.

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  ball1.display();
  log2.display();
    log3.display();
    log1.display();
    
    ground1.display();
	

  
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:15,y:-15	})
	   
	 }
   
   }



