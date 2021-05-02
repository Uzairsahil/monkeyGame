
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.7;

ground=createSprite(400,350,900,10);
  ground.velocityX=4;
  ground.x=ground.width/2;
  console.log(ground.x);
}
foodGroup =new Group ();
obstaclesGroup = new Group ();

function draw() {
  background(225);
  
stroke("white");
  textSize(20);
 fill("white");
 text("score:"+score,500,50);
  
 stroke("black");
  textSize(20);
 fill("black");
 survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50);
  
  if(keyDown("space")){
    monkey.velocityY=-6;
    monkey.debug=true;
  }
}
function food(){
if(frameCount%80===0) {
  banana=createSprite(100,300,20,20);
  banana.y=Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale=0.5;
  banana.setVelocityX=-3;
  banana.lifetime=200;
   bananaGroup.add(banana);
} 
  
}
function spawnObstacles() {
  if(frameCount % 300 ===0){
    var obstacle = createSprite(600,165,10,40);
    obstacle.addImage(obstacleImage);
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}