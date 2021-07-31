var background,backgroundImage;
var player,playerImage;
var ground,groundImage;
var cloudImage;
var birdImage;
var coinImage;
var obstracle, obstracle1, obstracle2, obstracle3;

function preload(){
  backgroundImage = loadImage("images/night.png");
  playerImage = loadAnimation("images/a.png","images/b.png","images/c.png");
  groundImage = loadImage("images/road.png");
  cloudImage = loadImage("images/cloud.png");
  birdImage = loadImage("images/bird.png");
  coinImage = loadImage("images/coin.png");
  obstracle1 = loadImage("images/obstracle1.png");
  obstracle2 = loadImage("images/obstracle2.png");
  obstracle3 = loadImage("images/obstracle3.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background = createSprite(750,150,2000,600);
  background.addImage(backgroundImage);
  background.scale = 3;
  background.velocityX = -3; 
  background.x = background.width/2;

  player = createSprite(250,450,50,100);
  player.addAnimation("image",playerImage);
  player.scale = 1.5;

  ground = createSprite(500,800,5000,10);
  ground.addImage(groundImage);
  ground.scale = 3.1;
  ground.velocityX = -3;
  ground.x = ground.width/2;

  ground.depth = player.depth;
  player.depth = player.depth + 1;
}

function draw() {
  if(background.x < 0){
    background.x = background.width/2;
  }

  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  Createclouds();
  Createbird();
  Createcoins();
  Createobstracle();
  drawSprites();
}

function Createclouds(){
  if(frameCount % 120 === 0){
    var cloud = createSprite(1200,200,35,35);
    cloud.addImage(cloudImage);
    cloud.scale = 0.2;
    cloud.velocityX = -2;
    cloud.lifetime = 800;
    cloud.y = Math.round(random(50,200));
  }
  }

  function Createbird(){
    if(frameCount % 200 === 0){
      var bird = createSprite(1200,200,30,30);
      bird.addImage(birdImage);
      bird.scale = 0.1;
      bird.velocityX = -2;
      bird.lifetime = 800;
      bird.y = Math.round(random(100,250));
    }
  }

  function Createcoins(){
    if(frameCount % 100 === 0){
      var coin = createSprite(1200,350,30,30);
      coin.addImage(coinImage);
      coin.scale = 0.1;
      coin.velocityX = -2;
      coin.lifetime = 800;
      coin.y = Math.round(random(300,450));
    }
  }

  function Createobstracle(){
    if(frameCount % 70 === 0){
      var obstracle = createSprite(1400,350,20,20);
    obstracle.velocityX = -2
    
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstracle.addImage(obstracle1);
      obstracle1.scale = 0.1;
              break;
      case 2: obstracle.addImage(obstracle2);
      obstracle2.scale = 1;
              break;
      case 3: obstracle.addImage(obstracle3);
      obstracle3.scale = 1;
              break;
      default: break;
    }
        
    obstracle.lifetime = 300;
    }
  }
