var fixedRect, movingRect, gameObject, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject= createSprite(5, 400, 50, 50);
  gameObject2 = createSprite(395, 400, 50, 50);
  gameObject.velocityX = 5;
  gameObject2.velocityX= -5;
  gameObject.shapeColor = "yellow";
  gameObject2.shapeColor = "yellow";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
if(isTouching(movingRect, fixedRect)){
movingRect.shapeColor="blue";
fixedRect.shapeColor="blue";
}
else{
  movingRect.shapeColor="green";
fixedRect.shapeColor="green";
}

if(isTouching(gameObject, gameObject2)){
  gameObject.shapeColor = "purple";
  gameObject2.shapeColor = "purple";
}
else{
  gameObject.shapeColor = "yellow";
  gameObject2.shapeColor = "yellow";
}

  
  drawSprites();
}
function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    &&object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2)
     { 
 // movingRect.velocityX = movingRect.velocityX * (-1);
 // fixedRect.velocityX = fixedRect.velocityX * (-1);
 return true;
}
else { return false;}
}