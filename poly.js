class Poly{

    constructor(x,y){

    var options = {
        
        'friction':1.0,
        'density': 0.1
    }

    this.body = Bodies.rectangle(x,y,50,50, options)
    this.width = 50
    this.height = 50
    this.image = loadImage("polygon.png");

    World.add(world,this.body)

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y)
        rotate(angle)
      
        fill("red")
        strokeWeight(5)
        stroke("black")
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }

}