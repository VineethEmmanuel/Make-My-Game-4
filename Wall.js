class Wall{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    display(){
        fill("black")
        rect(this.x,this.y,this.width,this.height);
        
    }
}