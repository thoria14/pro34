class Drop{
    constructor(x,y,r){
        var options={
            'friction':0.1
        }
        
        this.x=x;
        this.y=y;
        this.r=r;
        this.ball=Bodies.circle(x,y,r,options);
        World.add(world,this.ball);
    }
    update(){
        if(this.ball.position.y>height){
            Matter.Body.setPosition(this.ball,{x:random(0,600),y:5})
        }
    }
    display(){
        var pos = this.ball.position;

        ellipseMode(CENTER)
        fill("cyan")
        ellipse(pos.x,pos.y,this.r,this.r)


    }

}