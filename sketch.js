var pcNotMovingAnimation,pcMovingAnimation;
var pc;
var database;
var Div;
var loadGame=false;
var obstacles=[[],[]];
var finishline;
var no_of_players;

function preload()
{
   pcMovingAnimation = loadAnimation('./assets/pc_static.png','./assets/pc_static2.png')
}
function setup() 
{
  createCanvas(600, 700);

  database = firebase.database();

  var gameStateRef = database.ref('no_of_players');
    gameStateRef.on('value',function (data) {
      no_of_players = data.val();
    });

    
  

  finishline = new Finishline();
 
 for (var p = 0; p < 15; p++) {
  x = Math.round(Math.random());
  if(x===1)
  {
  obstacles[0].push(new Obstacle(25,(obstacles[0].length+obstacles[1].length)*200+25));
  // if(p===5){
  //   pc=new Player(300,obstacles[0][obstacles[0].length-1].position.y+250);
  // }
  }
  if(x===0)
  {
  obstacles[1].push(new Obstacle2(300,(obstacles[0].length+obstacles[1].length)*200+25));
  // if(p===5){
  //   pc=new Player(300,obstacles[1][obstacles[1].length].position.y+250);
  // }
  }
 }
 pc=new Player(300,(obstacles[0].length+obstacles[1].length)*200+25)

 sweetAlert.Start();
}
function draw() {
  background("black");


  camera.position.x=pc.charecter.x;
  camera.position.y=pc.charecter.y;

  finishline.finished();

  if(loadGame)
  {
  if(pc!==null)
  {
  pc.display();
  }
  for (var r = 0; r < obstacles[1].length; r++) {
    obstacles[1][r].display();
  }

  for (var r = 0; r < obstacles[0].length; r++) {
     obstacles[0][r].display();
  }}
 
  drawSprites();
}

function shoot(time)
{
  
  // if(loadGame){
  setTimeout(() => {
   console.log('outside the loop');
    shoot(2.3);
    for (var i = 0; i < obstacles[0].length; i++) {
      obstacles[0][i].shootArrow();
      
    }
    
  }, time*1000);
}
// }
