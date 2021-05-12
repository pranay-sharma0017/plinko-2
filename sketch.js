
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var turn =5;
var particle;
var play = 1;
var end = 0;

var gameState = play;
function setup() {
  createCanvas(805, 750);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 60; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 60; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  textSize(20)
  fill("yellow");
 text("Score : "+score,20,30);
 text("Turn:"+turn,700,30);
 fill("red");
 text("100",340,470);
 text("100",420,470);
 text("200",260,470);
 text("200",500,470);
 text("300",180,470);
 text("300",580,470);
 text("400",100,470);
 text("400",660,470);
 text("500",20,470);
 text("500",740,470);

  Engine.update(engine);
  ground.display();

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  

  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   if(frameCount%80===0 && gameState!=end){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
 }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
if(turn==0){
  
  gameState=end;
}
   if(frameCount%80===0 && turn!=0){
    turn=turn-1;


   }
   if(gameState===end){
     textSize(40)
     fill("orange")
     text("GAME OVER",300,240);
   }
   
}

