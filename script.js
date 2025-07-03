

var gamedata = {
    currentMoney: 10,
    threads: [],
    workingPic: false,
    pattern: ""
  };

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
  async function gen5(pattern){
    //TODO randomfunction to choose a pattern, for now i'll just go with one pattern and 2 colors
    var field = []
    var gamefield = "<table style='tablepic'>"  //htmlelement
    // for(var i = 0; i < (5*5); i = i +5){
    //   field.push([i, i+1, i+2, i+3, i+4, i+5])
    // }
    //TODO Patternpicker
    //only process if promise is resolved
    await loadPattern("smile")

    
      //TODO get the pattern onto the grid
    for(var i = 0; i < (5*5); i = i +5){
      field.push([gamedata.pattern[i], gamedata.pattern[i+1], gamedata.pattern[i+2], gamedata.pattern[i+3], gamedata.pattern[i+4] ])
    }

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
    
    
  

// Load of patterns from folder
async function loadPattern(name) {
  const response = await fetch(`patterns/${name}.json`);
  
  const pattern = await response.json();
  gamedata.pattern = pattern.pattern;
}
