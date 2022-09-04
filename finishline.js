class Finishline{
    constructor()
    {
        this.finishline=createSprite(350,-100,700,10);
        this.finishline.shapeColor="green";
        this.easterEgg=null;
    }

    finished()
    {
        pc.charecter.isTouching(this.finishline,()=>{
        Victory();
        this.easterEgg=createSprite(100,(obstacles[0].length+obstacles[1].length)*200+25,50,50);
        this.easterEgg.shapeColor="teal"
        this.finishline.remove();
        console.trace();
        
    });
    if(this.easterEgg!==null)
        {
            console.log('hey')
            this.operateEasterEgg()
        }

    
}
    operateEasterEgg()
    {
        this.easterEgg.isTouching(pc.charecter,()=>{
            setTimeout(()=>{
                close();
            },5000)
            this.easterEgg.remove();
            sweetAlert.touchingEasterEgg();
            database.ref(`/records/${text_po}`).update({
                gotEasterEgg:true
            });
        })
    }
}