class Monster{
    constructor(x, y) {
        var options = {
            density:1,
            frictionAir:0.005
                     
        }
        this.image=loadImage("monster1.png");
        this.body = Bodies.circle(x, y, 170, options);
        this.radius=170;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("black");
       imageMode(CENTER);
       image(this.image,0,0,this.radius,this.radius,500,100);
        pop();
      }    
}