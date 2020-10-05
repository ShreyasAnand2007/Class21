//To Create Two Rectangles variables
var rect1;
var rect2;
var rect3,rect4, rect5;


//To Create Rect1 and Rect2 sprites
function setup() {
   createCanvas(800,400);
 rect1 = createSprite(400, 200, 50, 50);
 rect2 = createSprite(400, 200, 50, 50);
 rect3 = createSprite(500, 200, 50, 50);
 rect4 = createSprite(580, 200, 50, 50);
 rect5 = createSprite(690, 200, 50, 50);
}


function draw() {
  background(255,255,255);  
  drawSprites();
  //To set the mouse position to rect1
  rect1.y = mouseY;
  rect1.x = mouseX;

  //To Give Color To Rect1 and Rect2
  rect1.shapeColor="red";
  rect2.shapeColor="green";
  rect3.shapeColor="orange";
  rect4.shapeColor="purple";
  rect5.shapeColor="brown";

  //To change color of rectangles when they touch each other
  if(isTouching(rect1,rect2)) {
    rect1.shapeColor="green";
    rect2.shapeColor="red";
  }
  if(isTouching(rect1,rect3)) {
    rect1.shapeColor="orange";
    rect3.shapeColor="red";
  }
  if(isTouching(rect1,rect4)) {
    rect1.shapeColor="purple";
    rect4.shapeColor="red";
  }
  if(isTouching(rect1,rect5)) {
    rect1.shapeColor="brown";
    rect5.shapeColor="red";
  }
}

function isTouching(object1,object2) {
  if(object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object1.width/2+object2.width/2 && object1.y-object2.y<object1.height/2+object2.height/2 && object2.y-object1.y<object1.height/2+object2.height/2){
    return true;
      
  }
  else{
    return false;
  }
}
