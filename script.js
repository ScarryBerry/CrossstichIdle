var gamedata = {
    currentMoney: 10,
    data: x
  };

function setSaveGameData(){

    document.getElementById("currentMoney").innerHTML =
        "current money: " + gamedata.currentMoney.toFixed(2);
      
    }

function resetGame(){
  
        gamedata = {
        currentMoney: 10
    };


    location.reload();
}

var gameloop = window.setInterval(function(){
    ;
    updateMeter();
    money =+ 1
  }, 100)
var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("CrossSave", JSON.stringify(gamedata));
  }, 1500)
  
  var savegame = JSON.parse(localStorage.getItem("CrossSave"))
  if (savegame !== null) {
    gamedata = savegame;
    setSaveGameData()
  }