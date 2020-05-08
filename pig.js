class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 30, 30, options);
      this.width = 30;
      this.height = 30;
      
      World.add(world, this.body);
    }
    display(){push();
      var pos =this.body.position;
      var angle = this.body.angle;
      angleMode(RADIANS);
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      strokeWeight(3);
      stroke("black");
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  