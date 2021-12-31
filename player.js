
class Player {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.player_image = loadImage("arrow.png");
      this.player_base = loadImage("player.png");
    }
    display() {
      if (keyIsDown(RIGHT_ARROW) && this.angle<70  ) {
        this.angle += 1;
      }
  
      if (keyIsDown(LEFT_ARROW) && this.angle>-47 ) {
        this.angle -= 1;
      }
  
  
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.player_image, 0, 0, this.width, this.height);
      pop();
      image(this.player_base, 10, 420, 250, 310);
      noFill();
    }
  }