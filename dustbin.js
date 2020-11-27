class Dustbin {
    constructor(x, y,width, height) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //Matter.Body.setAngle(this.body,angle);

      World.add(world, this.body);

      //Matter.Body.setStatic(this.body,true);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };