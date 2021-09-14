function preload(){
  //pre-load images
  track_animation = loadAnimation("path.png");
  surfer_animation = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  //moving background
  var track = createSprite(200, 200);
  track.addAnimation(track_animation)
  track.velocityY = 5;
  track.scale = 1.2;

  //surfer
  var surfer = createSprite(200, 350);
  surfer.addAnimation(surfer_animation)
  surfer.velocityX = 5;

  //edge sprites
  var left_edge = createSprite(10, 200, 20, 400);
  var right_edge = createSprite(390, 200, 20, 400);
}

function draw() {
  background(0);
  drawSprites();

  //code to reset the background
  if(track.y > 400) {
    track.y = height / 2;
  }
  if(surfer.isTouching(right_edge)) {
    surfer.velocityX = -5;
  } 
  if(surfer.isTouching(left_edge)) {
    surfer.velocityX = 5;
  } 

}