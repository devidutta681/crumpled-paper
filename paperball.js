class paperball {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radius)
        this.r = radius
        this.image = loadImage("paper.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        pop();
        imageMode(CENTER);
        this.image.width = this.image.height = this.body.r
        image(this.image, pos.x ,pos.y,this.r);
      }
}
    
