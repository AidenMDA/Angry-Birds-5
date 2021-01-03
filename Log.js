class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.Visibility = 255;
    this.height = height;
  }

  display()
  {
    if (this.body.speed < 6)
    {
      super.display();
    }
    else
    {
      World.remove(world, this.body);
      push();
      tint(255, this.Visibility);
      image(this.image, this.body.position.x, this.body.position.y, 20, this.height);
      this.Visibility -= 5;
      pop();
    }
  }

}