
  const Engine=Matter.Engine;
 const World=Matter.World;
 const Bodies=Matter.Bodies;
 const Constraint = Matter.Constraint;

 var bar;
 var bob;
  var  chain;

function setup(){
  createCanvas(400,600);
 // var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  function keyPressed(){
    if(keyCode === 32){
      bob.body.velocityX=0.5;
    //  bob.body.velocityy=200;
    }   
  }   
bob=new Bob(300,300,40);
bar=new Bar(200,100);
//Matter.Body.setPosition(bob.body, {x: mouseX , y: mouseY});
//chain=new Chain(bob.body,{x:200, y:50});
var options = {
  bodyA: bar.body,
  bodyB:bob.body,
   stiffness: 0.04,
   length: 200,

}
 chain=Constraint.create(options);
 World.add(world,chain);
}

 function draw() {
   background("white");
   Engine.update(engine);
   
 line(bar.body.position.x,bar.body.position.y,bob.body.position.x,bob.body.position.y,)

bob.display();
bar.display();
//chain.display();
 }