class Bar {
  constructor(x,y) {
      var options= {
        isStatic:true
      }
      this.body=Bodies.rectangle(x,y,200,20,options);
      this.width=200;
      this.height=20;
      World.add(world,this.body);
    }   
     display() {
     var pos=this.body.position;
      fill("brown");
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);


      }


    
}