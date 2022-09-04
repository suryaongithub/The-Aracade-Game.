class Obstacle2 {
    constructor (x,y)
    {
        this.x=x;
        this.y=y;
        this.length=600;
        this.obstacle=createSprite(this.x,this.y,this.length,25);
        this.teleporter1=createSprite(Math.floor((Math.random() * 300) + 1),this.y+50,50,50);
        this.teleporter2=createSprite(Math.floor((Math.random() * 300) + 1),this.y-50,50,50);
        this.obstacle.shapeColor='blue';
        this.teleport=Boolean(true);
    }

    display()
    {
        this.InContactWithPlayer();
        this.PlayerInContactWithTeleporter();
    }

    InContactWithPlayer()
    {
        pc.charecter.isTouching(this.obstacle,()=>{
            Lost()
        })
    }

    PlayerInContactWithTeleporter()
    {
        pc.charecter.isTouching(this.teleporter1,()=>{
            if(this.teleport)
            {
                pc.charecter.x=this.teleporter2.x;
                pc.charecter.y=this.teleporter2.y;
                this.teleport=false;
                setTimeout(()=>{this.teleport=true},2000);
            }
            
        })

        pc.charecter.isTouching(this.teleporter2,()=>{
            if(this.teleport)
            {
                pc.charecter.x=this.teleporter1.x;
                pc.charecter.y=this.teleporter1.y;
                this.teleport=false;
                setTimeout(()=>{this.teleport=true},2000);
            }
        })
    }

}