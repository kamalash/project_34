class Ball {
    constructor(x, y) {
      var options = {
        isStatic: true
      };
      this.r = 90;
      this.speed = 0.1;
      this.body = Bodies.circle(x, y, 20, options);
      this.image = loadImage("ball.png");
      this.animation = [this.image];
      this.trajectory = [];
      //this.isSink = false;
      this.angle = 30;
      World.add(world, this.body);
    }
  
    animate() {
      this.speed += 0.05;
    }
  
    remove(index) {
     // this.isSink = true;
      Matter.Body.setVelocity(this.body, { x: 0, y: 0 });
  
     // this.animation = waterSplashAnimation;
      this.speed = 0.05;
      this.r = 9;
      setTimeout(() => {
        Matter.World.remove(world, this.body);
        delete balls[index];
      }, 10);
    }
  
    shoot() {
       var newAngle = this.body.angle - 16;
      newAngle = newAngle *(3.14/180)
      var velocity = p5.Vector.fromAngle(newAngle);
      velocity.mult(0.5);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, {
        x: velocity.x *(50), y: velocity.y * (50)});
    }
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      var index = floor(this.speed % this.animation.length);
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.animation[index], 0, 0, this.r, this.r);
      pop();
  
      if (this.body.velocity.x > 0 && pos.x > 10 && !this.isSink) {
        var position = [pos.x, pos.y];
        this.trajectory.push(position);
      }
  
      for (var i = 0; i < this.trajectory.length; i++) {
        image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
      }
    }
  }
  