class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,80,80,options);
      this.width = 80;
      this.height = 80;
      this.image = loadImage("enemy.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill(16, 253, 105);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }