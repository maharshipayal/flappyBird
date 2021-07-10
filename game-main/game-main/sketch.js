var bird,birdImg;
var pipe, pipe1Img,pipe2Img,pipe3Img,pipe4Img,pipe2;







function preload(){
birdImg = loadImage("birrd.png");
pipe1Img = loadImage("pipe1.png");
pipe2Img = loadImage("pipe2.png");
pipe3Img = loadImage("pipe3.png");
pipe4Img = loadImage("download.png");
backgroundImg = loadImage("background.png");
}

function setup(){
  createCanvas(600,200)
bird = createSprite(50,80,30,10);
bird.addImage("bird",birdImg);
bird.scale = 0.1  
}


function draw(){
background(backgroundImg);
pipes();
drawSprites();
}

function pipes(){
  if(frameCount %100 === 0){
pipe = createSprite(600,180,10,40);
pipe.velocityX = -2;

pipe2 = createSprite(600,10,10,40);
pipe2.addImage("pipe2",pipe2Img);
pipe2.velocityX = -2;
pipe2.scale = 0.1;

var rand = Math.round(random(1,3));
switch(rand){
  case 1: pipe.addImage("pipe1",pipe1Img);
          pipe.scale = 1.0;
  break;
  case 2: pipe.addImage("pipe3",pipe3Img);
  pipe.scale = 0.1;
  break;
  case 3: pipe.addImage("pipe4",pipe4Img);
  pipe.scale = 0.5;
  break;
  default:break;
}


  }
}