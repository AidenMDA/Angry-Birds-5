class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.Visibility = 255;
    this.width = width;
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
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      this.Visibility -= 5;
      pop();
    }
  }

};
