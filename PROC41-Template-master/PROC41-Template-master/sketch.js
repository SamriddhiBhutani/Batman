const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var drops = [];
var maxdrops = 100;
var light1, light2, light3, light4;

function preload(){
  light1 = loadImage("images/1.png");
  light2 = loadImage("images/2.png");
  light3 = loadImage("images/3.png");
  light4 = loadImage("images/4.png")
}

function setup(){
  var canvas = createCanvas(500,600)
  engine = Engine.create();
  world = engine.world;
    
  man = new Umbrella(250,390,450,500)
 
}

function draw(){
    background(0)
    Engine.update(engine);    
    for (var i = 0; i<maxdrops; i++){
      drops.push(new Drops(random(0,400),random(0,400)))
      drops[i].display();
    }
    man.display();
    if(frameCount % 200 === 0){
      var light = createSprite(random(100,500),50);
      var select_light = random(1,4)
      if(select_light === 1){
        light.addImage(light1);
      }
      else if(select_light === 2){
        light.addImage(light2)
      }
      else if(select_light === 3){
      light.addImage(light3);
    }
    else if(select_light === 4){
      light.addImage(light4)
    }
  } 
}
