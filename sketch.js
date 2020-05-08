const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2,box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,360,50,50);
    box2 = new Box(900,360,50,50)
    ground = new Ground(600,380,1200,10) 
    pig1 = new Pig(800,360)
    log1 = new Log(800,340,300,PI/2);

    box3 = new Box(700,320,50,50);
    box4 = new Box(900,320,50,50);
    pig2 = new Pig(800,320);
    log2 = new Log(800,300,300,PI/2);

    box5 = new Box(800,290,50,50);
    log3 = new Log(750,290,150,PI/6);
    log4 = new Log(850,290,150,-PI/6);

    bird = new Bird(200,300);
}


function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}