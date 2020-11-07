class Drops{
    constructor(x,y,){
        var options = {
            restitution: 1,
            friction: 0.8,
            density: 0.4            
        }
        this.drop = Bodies.circle(x,y,5,options);
        this.x = x;
        this.y = y;
        this.radius = 5;
        
        World.add(world,this.drop);
    }
    display(){
        var pos = this.drop.position;
        var angle = this.drop.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue")
        ellipse(0,0,this.radius);
        pop();
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop, {x:random(0,400), y:random(0,400)});
        }
    }
}