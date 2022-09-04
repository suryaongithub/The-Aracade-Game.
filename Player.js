class Player{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.charecter=createSprite(this.x,this.y,50,50);
        this.timesCrossedScreen=0;
    }

    display()
    {
      // push();
      // imageMode(CENTER);
      // image(animation,this.charecter.position.x,this.charecter.position.y,100,100)
      // pop();
      this.handlePlayerControls();
      this.popUp();
    }

    handlePlayerControls ()
    {
      if(keyDown('UP_ARROW')){
        this.charecter.position.y-=5;
      }
      if(keyDown('DOWN_ARROW')&&this.charecter.y<(obstacles[0].length+obstacles[1].length)*200+25+100){
        this.charecter.position.y+=5;
      }
      if(keyDown('LEFT_ARROW')&&this.charecter.x>0){
        this.charecter.position.x-=5;
      }
      if(keyDown('RIGHT_ARROW')&&this.charecter.x<600){
        this.charecter.position.x+=5;
      }
    }

    popUp()
    {
      if(this.charecter.y>(obstacles[0].length+obstacles[1].length)*200+25+100||this.charecter.x===3||this.charecter.x===597)
      {
        if(this.timesCrossedScreen<=3)
        {
          alert('you cannot just drift into the void try using a different key');
          this.charecter.x=300;
          this.charecter.y=(obstacles[0].length+obstacles[1].length)*200+25;
          this.timesCrossedScreen++
        }
      }
    }
}