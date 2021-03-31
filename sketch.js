var fixedRect, movingRect;

function setup() {
  createCanvas(600,600);
  fixedRect = createSprite(400, 400, 50, 50);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(400, 100, 50, 50);
  movingRect.shapeColor = "blue";
}

function draw() {
  background("yellow");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }

  

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x <object1.width/2 + object2.width/2 && 
    object2.x -object1.x <object1.width/2 + object2.width/2 && 
  object1.y - object2.y <object1.height/2 + object2.height/2 && 
    object2.y -object1.y <object1.height/2 + object2.height/2){
    
    return true;
  }
  else{
    
    return false;
  }
}