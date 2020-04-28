class Bob{
constructor(x,y,r){
    var options={
        restitution:0.4,
        density:1,
        friction:0.3,
      //  isStatic:true
    }
this.body=Bodies.circle(x,y,r,options);
this.r=40;
World.add(world,this.body);
}
display() {
var pos=this.body.position;
fill("red");
ellipseMode(RADIUS);
this.body.position.x=mouseX;
this.body.position.y=mouseY;
function keyPressed(){
  if(keycode===32){
   this.body.position.x=pos.x;
   this.body.position.y=pos.y;
 }
  
}

ellipse(pos.x,pos.y,this.r);

}




}