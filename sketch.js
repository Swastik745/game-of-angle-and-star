var ground,groundImage;
var cat,catImage1,catIm2,catImage3;
var mouse,mouseImage1,mouseIm2,mouseImage3;

function preload() {
   groundImage = loadImage("garden.png");
   catImage1 = loadImage("cat1.png");
   mouseImage1 = loadImage("mouse1.png");
   catIm2 = loadAnimation("cat2.png","cat3.png");
   catImage3 = loadAnimation("cat4.png");
   mouseIm2 = loadAnimation("mouse2.png","mouse3.png");
   mouseImage3 = loadAnimation("mouse4.png");
}

function setup() {
  createCanvas(875,625);
   
  ground = createSprite(438,310);
  ground.addImage(groundImage);
  ground.scale = 0.9;

  cat = createSprite(800,480);
  cat.addImage(catImage1);
  cat.scale = 0.1;
  

  mouse = createSprite(150,480);
  mouse.addImage(mouseImage1);
  mouse.scale = 0.10;

}

function draw() {
   background("blue");

   

   if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
       cat.velocityX = 0;
       cat.addAnimation("catlastImage",catImage3);
       cat.changeAnimation("catlastImage",);
       cat.x = 200;
       cat.y = 480;

       mouse.addAnimation("mouseLastImage",mouseImage3);
       mouse.changeAnimation("mouseLastImage");
   }

   keyPressed ();
  drawSprites();
}

function keyPressed () {

  if(keyDown(LEFT_ARROW)) {
     cat.velocityX = -5;
     cat.addAnimation("catRunning",catIm2);
     cat.changeAnimation("catRunning");

               
     mouse.addAnimation("mouseTalking",mouseIm2)
     mouse.changeAnimation("mouseTalking");
  }
}   



