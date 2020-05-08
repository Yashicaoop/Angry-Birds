class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){push();
    var pos =this.body.position;
    var angle = this.body.angle;
    angleMode(RADIANS);
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("brown");
    strokeWeight(2);
    stroke("white")
    rect(0,0, this.width, this.height);
    pop();
  }
};
