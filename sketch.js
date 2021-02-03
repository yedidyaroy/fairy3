var ground,groundImage;
var fairy,fairyImage;
var starBody;
var star,starImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var music;
function preload(){
  groundImage = loadImage("starnight.png")
  fairyImage = loadAnimation("fairy1.png","fairy2.png")
  starImage = loadImage("star.png")
  music.loadSound("JoyMusic.mp3")
}
   
function setup(){
  createCanvas(600,600);
  ground = createSprite(200,200,20,20);
  ground.addImage(groundImage);

  fairy = createSprite(200,200,20,20);
  fairy.addAnimation("flying",fairyImage);
  fairy.scale=0.2;

  star = createSprite(200,200,20,20);
  star.addImage(starImage);
  star.scale=0.2;

  engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(500 , 100 , 5 , {restitution:0.4, isStatic:true});
  World.add(world, starBody);
  Engine.run(engine);
}

function draw(){
  rectMode(CENTER);
  background("white")
  star.x= starBody.position.x 
  star.y= starBody.position.y 
  fairy.x=mouseX;
  fairy.y=mouseY;
  if (keyDown("down")){
    Matter.Body.setStatic(starBody,false);
  }

  if (starBody.position.y>470){
    Matter.Body.setStatic(starBody,false);
    starBody.restitution(starBody,1);
  }
  drawSprites();
}