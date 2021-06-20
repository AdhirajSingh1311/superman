const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
  bg=loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1400,600);
  engine = Engine.create();
  world = engine.world;
ground=new Ground(700,580,1400,20);
box1 = new Box (900,480);
box2 = new Box (800,480)
box3 = new Box (700,480);
box4 = new Box (900,380);
box5 = new Box (800,380)
box6 = new Box (700,380);
box7 = new Box (900,280);
box8 = new Box (800,280)
box9 = new Box (700,280);
ball=  new Ball(400,480);
slingshot= new Slingshot(ball.body,{x:400,y:100})
monster=new Monster(1000,400);


}

function draw() {
  background(bg); 
  Engine.update(engine) 
 ground.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 ball.display();
 slingshot.display();
 monster.display();
}
function mouseDragged(){

Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})


}