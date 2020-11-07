class Umbrella {
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = loadImage("images/walking_1.png")

        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        
    }
}