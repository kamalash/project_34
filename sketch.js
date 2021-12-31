
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var player
var balls = []
var ball
function preload(){
  bk_img = loadImage("BK.png")
  cheerUp = loadSound("cheerup.mp3")
  cheerDown = loadSound("cheerdown.mp3")
}


function setup() {
  createCanvas( 1300,660 );
  
  engine = Engine.create();
  world = engine.world;
  hoop = createImg("hoop.png")
  hoop.position(890,180)
  block = new Ground(975,395,10,100)
  block2 = new Ground(1095,410-50,10,175)
  //block3 = new Ground(1040,460,100,10)
  angleMode(DEGREES)
  angle = 15

  player = new Player(250,450,150,150,20);
}


function draw() 
{
  background(51);
  image(bk_img,0,0,1300,660);
  Engine.update(engine);

  for (var i = 0; i < balls.length; i++) {
    showBalls(balls[i], i);
  }

  //block.display();
  //block2.display();
 // block3.display();
  player.display()
  
  
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var ball = new Ball(player.x, player.y);
    ball.trajectory = [];
    Matter.Body.setAngle(ball.body, player.angle);
    balls.push(ball);
  }
}

function showBalls(ball, index) {
  if (ball) {
    ball.display();
   // ball.animate();
    if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
      if (!ball.isSink) {
        ball.remove(index);
        cheerDown.play();
      }
    }
    if (ball.body.position.x <= 1090 && ball.body.position.x >= 990  ) {
      if( ball.body.position.y <= 470 && ball.body.position.y >= 400){
      ball.remove(index);
      cheerUp.play();
      }
    }
  }
}
function collide(body,body2)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,body2.position.x,body2.position.y);
          if(d<=20)
            {
               balls.length-1
               //ball = null;
               return true; 
            }
            else{
              return false;
            }
         }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length - 1].shoot();
  }
}
