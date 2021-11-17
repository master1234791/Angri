const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var constraintLog;
var ground,platform;
var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function preload() {
    bg = loadImage("bg.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight-10);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(851,height,1703,20);
    bird1 = new Bird(200,100,100,100)
    box1 = new Box(1200,height-100,100,100);
    box2 = new Box(1400,height-100,100,100)
    log1 = new Log(1299,height-200,295,PI/2);
    box3 = new Box(1200,height-200,100,100);
    box4 = new Box(1400,height-201,100,100);
    log2 = new Log(1299,height-300,295,PI/2);
    box5 = new Box(1294,height-320,100,100);
    log3 = new Log(1245,height-420,150,PI/8);
    log4 = new Log(1360,height-420,150,PI/-8);
    pig1 = new Pig(1300,height-70);
    pig2 = new Pig(1300,height-270);
    platform = new Ground(width/16,height*7/8,1000,600);
   // constraintLog = new Ground(200,100,80,PI/2);
    //var opciones = 
    //{bodyA: bird.body, 
   // bodyB: constrainedLog.body, 
   // rigidez: 0.04, 
   // longitud: 10 }
   // cadena = Constraint.create (opciones);
   // World.add (mundo,cadena);
}

function draw(){
    background(bg);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    platform.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    bird1.display();
    ground.display();
    //constraintLog.display();

}