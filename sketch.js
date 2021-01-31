const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var ground;
var polygon;
var string;

function preload(){



}

function setup(){

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(620,250,230,10)
    ground1 = new Ground(1000,150,200,10)

    ground2 = new Ground(600,380,1200,40)

    polygon = new Poly(150,250);

    string = new rope(polygon.body,{x:150,y:250});


    //fist layer
    
    
    block1 = new Block(530,235,30,40);
    block2 = new Block(560,235,30,40);
    block3 = new Block(590,235,30,40);
    block4 = new Block(620,235,30,40);
    block5 = new Block(650,235,30,40);
    block6 = new Block(680,235,30,40);
    block7 = new Block(710,235,30,40);

    //second layer

    block8 = new Block(620,195,30,40);
    block9 = new Block(650,195,30,40);
    block10 = new Block(680,195,30,40);
    block11 = new Block(590,195,30,40);
    block12 = new Block(560,195,30,40);

    //third layer

    block13 = new Block(620,155,30,40);
    block14 = new Block(650,155,30,40);
    block15 = new Block(590,155,30,40);

    //fourth layer

    
    block16 = new Block(620,105,30,40);


    //first layer 2
    block17 = new Block(1000,135,30,40);
    block18 = new Block(1030,135,30,40);
    block19 = new Block(1060,135,30,40);
    block20 = new Block(970,135,30,40);
    block21 = new Block(940,135,30,40);


    //second layer 2

    block22 = new Block(1000,95,30,40);
    block23 = new Block(1030,95,30,40);
    block24 = new Block(970,95,30,40);

    //third later 2
    block25 = new Block(1000,55,30,40);




    

    



}


function draw(){
    background(60,46,46);
    
    
    Engine.update(engine);

    ground.display();
    ground1.display();
    ground2.display();
    polygon.display();
    string.display();

    fill(103,209,234);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();


    fill(255,190,196);
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill(0,228,208);
    block13.display();
    block14.display();
    block15.display();

    fill(125,128,120)
    block16.display();



    fill(103,209,234);
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    fill(0,228,208);
    block22.display();
    block23.display();
    block24.display();

    fill(255,190,196);
    block25.display();

    fill("white");
    textSize(25);
    text("Drag The Hexagonal Stone And Release It, To Launch It Towards The Blocks",50,30);

}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string.fly();
}

function keyPressed(){

    if(keyCode === 32){
    Matter.Body.setPosition(polygon.body, {x:150, y:250})
    string.attach(polygon.body);
    
    
    }
    
    
    }