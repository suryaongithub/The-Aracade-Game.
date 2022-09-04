class Obstacle {
    constructor (x,y)
    {
        this.x=x;
        this.y=y;
        this.obstacle=createSprite(x,y,50,50);
        this.stopper=createSprite(x+550,y,10,50);
        this.obstacle.shapeColor='red';
        this.arrows=[];

    }

    display()
    {
        this.InContactWithPlayer();
        this.moveArrows();
        this.destroyArrowsInContactWithTheStopper();
        this.destroyPlayerInContactWithArrow();
    }

    shootArrow()
    {
        var arrow = createSprite(this.x,this.y,50,10);
        this.arrows.push(arrow);

    }

    InContactWithPlayer()
    {
        pc.charecter.isTouching(this.obstacle,()=>{
            Lost()
        })
    }

    moveArrows()
    {
        
        for (let q = 0; q < this.arrows.length; q++) {
            if(this.arrows[q]!==null){
            this.arrows[q].x+=10;
            }
        }
    }

    destroyArrowsInContactWithTheStopper()
    {
        for (let q = 0; q < this.arrows.length; q++) {
            if(this.arrows[q]!==null){
            this.arrows[q].isTouching(this.stopper,()=>{
                // to be worked on <>
                // unable to remove elements from this.arrows

                // this.arrows.splice(this.arrows.indexOf(this.arrows[q]),1);
                this.arrows[q].remove();
                // this.arrows=this.arrows.splice(this.arrows.indexOf(null));
            })}
            
        }
    }

    destroyPlayerInContactWithArrow()
    {
        for (let q = 0; q < this.arrows.length; q++) {
            if(this.arrows[q]!==null){
                if(pc!==null){
            pc.charecter.isTouching(this.arrows[q],()=>{
               
                Lost();
            })}}}
    }
}