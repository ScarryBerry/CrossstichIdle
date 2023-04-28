import patterns from './patterns.json' assert { type: 'json' };

var gamedata = {
    currentMoney: 10,
    threads: [],
    workingPic: false,
    pattern: ""
  };
//var charvault = ["a","b","c","d","e","f","g","h","i","j","k",l,m,n,o,p,j,r,s,t,u,v,w,x,y,z]
function setSaveGameData(){

    document.getElementById("currentMoney").innerHTML = "current money: " + gamedata.currentMoney.toFixed(2);
    if(gamedata.workingPic){
      document.getElementById("picButton").style.display = "none"
      document.getElementById("placeForPic").style.display = "block"
      gen5(gamedata.pattern)
    }
    }

function resetGame(){
  
        gamedata = {
        currentMoney: 10,
        threads: [],
        workingPic: false
    };

    localStorage.setItem("CrossSave", JSON.stringify(gamedata));
    location.reload();
}

function showPopup(){
    var abGame = document.getElementById("aboutGame");
    var game = document.getElementById("mainGame");
    if (abGame.style.display === 'none') {
      abGame.style.display = 'block';
      game.style.display = 'none';
    } else {
      abGame.style.display = 'none';
      game.style.display ='block';
    }
  }

function Money1(){
    gamedata.currentMoney = gamedata.currentMoney + 1
    document.getElementById("currentMoney").innerHTML = "current money: " + gamedata.currentMoney.toFixed(2)
}
function buyPic() {
  gamedata.workingPic = true
  document.getElementById("picButton").style.display = "none"
  document.getElementById("placeForPic").style.display = "block"
  gen5()
}
var gameloop = window.setInterval(function(){
    //Should do nothing, stub for repeating actions (upgrade idea for later)
  }, 1000)
var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("CrossSave", JSON.stringify(gamedata));
  }, 1500)
  
  var savegame = JSON.parse(localStorage.getItem("CrossSave"))
  if (savegame !== null) {
    gamedata = savegame;
    setSaveGameData()
  }

  //gamefield
  function gen5(pattern){
    //TODO randomfunction to choose a pattern, for now i'll just go with one pattern and 2 colors
    var field = []
    var gamefield = "<table>"  //htmlelement
    for(var i = 0; i < (5*5); i = i +5){
      field.push([i, i+1, i+2, i+3, i+4, i+5])
    }
    //TODO get the pattern onto the grid
    console.log(patterns)
    //TODO Print of pattern instead of values
    for(var row of field){
      var tr = "<tr>"
      for(var cell of row){
        tr = tr + "<td>" + cell + "</td>"
      }
      tr = tr + "</tr>"
      gamefield = gamefield + tr
    }
    gamefield = gamefield + "</table>"
    console.log(gamefield)
    document.getElementById("placeForPic").innerHTML = gamefield
    
  }
