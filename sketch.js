var box;
function setup() {
  createCanvas(400,400);

box= createSprite (200,200,40,40)
}

function draw() 
{
  background(rgb(160, 255, 222));
box.ShapeColor= (rgb(209, 0, 0))
if(keyDown("up")){
  box.position.y= box.position.y-5
}
if(keyDown("down")){
  box.position.y= box.position.y+5
}
if(keyDown("right")){
  box.position.x= box.position.x+5
}
if(keyDown("left")){
  box.position.x= box.position.x-5
}
  drawSprites()
}




