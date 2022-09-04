var text_po;
var myHTML = `
<i>
            <h3 id="heading">Hello, nice to meet you, we would like to know your name</h3>
        </i><img src="./assets/question.png" width="200" height="200" id="image"><br><br>
        <input placeholder="Your name" id="myInput" class="inputBlock"><br><br>
        <button onclick="buttonClicked('nope')" id='button1'>no thanks</button>
        <button onclick="buttonClicked('do it')" id='button2'>Done</button>
        `
var myHTML1 = `
<h1 class="heading">oh so you have also found the easter egg, fantastic!,
thank you for playing</h1>
`
var myHTML2=
`
<h2>ooh congratulations you have won,i've heard there is a secret easter egg somewhere,good luck</h2>
`
var x;


function buttonClicked(value)
{
   
  if(value==='do it')
  {
    x = document.getElementById('myInput').value;
    x=x.replace(/#/g,'');
    swal(`Nice to meet you ${x}`,{timer:1500});

    no_of_players++;
    text_po = "record".concat(no_of_players).toString();
    database.ref(`/records/${text_po}`).set({
        name:x,
        won:false,
        gotEasterEgg:false
      
    });

    database.ref(`/`).update({
      no_of_players:no_of_players
    
  });
   
  }
    if(value==='nope')
    {
      swal("okay no problem, enjoy the game");
      no_of_players++;
      text_po = "record".concat(no_of_players).toString();
     
      database.ref(`/records/${text_po}`).set({
        name:"#nameless",
        won:false,
        gotEasterEgg:false
      
    });

    database.ref(`/`).update({
      no_of_players:no_of_players
    
  });
    }
    loadGame=true;
    shoot(2.3);
  }

  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
    
    
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("You've tried to open context menu");
      window.event.returnValue = false;
    });
  }

  var sweetAlert={
    Lost:function (){
      swal("oops,you failed would you like to try again?", {

    buttons: {
      yes:{
        text:'yes, take me back',
        value:'do it',
        color:'red'
    },
      catch: {
        text: "nope, no thanks",
        value: "prompt more to the guide",
      }
    },
  })
  .then((value) => {
    switch (value) {
  
  
      case "prompt more to the guide":
        swal(
            "would you like to see more of my games",{
            buttons:{
                yes:{
                    text:'YES',
                    value:"yes"
                },
                nope:{
                    text:'no thanks',
                    value:'exit'
                }
            }}
        ).then((value=>{
            switch(value){
                case 'yes':
                    location.href="https://suryaongithub.github.io/the-guide/master.html";
                    break;

                case 'exit':
                    close();
                    break;
            }
        }))
        break;
  
      case "do it":
        location.reload();
        break;
    }
  })},
  Start:function(){
  swal({
    content:{
      element:'div',
      attributes:{
        class:'customDiv',
        id:'myDiv',
        innerHTML:myHTML
      }
    },buttons: false});
  },
  won:function ()
  {
    swal({
      content:{
        element:'div',
        attributes:{
          class:'customDiv',
          id:'myDiv',
          innerHTML:myHTML2
        }
      },buttons: false,timer: 7000});
  },
  touchingEasterEgg:function(){
    swal({content:{
      element:'div',
      attributes:{
        class:'customDiv',
        id:'myDiv',
        innerHTML:myHTML1
      }
    },buttons: false,timer: 7000})
  }
}

function Victory()
{
  sweetAlert.won();
  database.ref(`/records/${text_po}`).update({
    won:true
});
}
function Lost()
{
  pc.charecter.remove();                

  loadGame=false;
  sweetAlert.Lost();
}

