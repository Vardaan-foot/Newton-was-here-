const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies

var engine, world, object,ground
function setup() {
  createCanvas(400,400);
  engine= Engine.create()
  world= engine.world

  var options={
    isStatic: true
  }
  ground=Bodies.rectangle(200,390,400,20,options)
World.add(world,ground)

var option={
  restitution:0.9
}

  object= Bodies.circle(200,200,20,option)
  World.add(world,object)
  console.log(object)
 
}

function draw() {
  background(0); 
  Engine.update (engine)
  rectMode(CENTER) 
  ellipseMode(CENTER)
  ellipse(object.position.x,object.position.y,50,50)
  rect(ground.position.x,ground.position.y,400,20)
  //drawSprites();
}