const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var myEngine;
var myWorld;

var ground, leftground, rightground;
var rope;

var constraint;


function setup() {
  createCanvas(windowWidth, windowHeight);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  frameRate(80);

  ground = new Base(650,680,1310,20);
  leftground = new Base(10,500,200,200);
  rightground = new Base(720,500,200,200);

  var rope = new Bridge(14,{x:250, y:40});

  Matter.Composite.add(rope.body, constraint);
  var constraint = new Link(leftground, rope);
  var constraint = new Link(rightground, rope);
}

function draw() {
  background(21);
  Engine.update(myEngine);

  ground.display();
  leftground.display();
  rightground.display();

  rope.show();

}
