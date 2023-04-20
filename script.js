var gamedata = {
    currentMoney: 10,
    data: 0
  };

function setSaveGameData(){

    document.getElementById("currentMoney").innerHTML = "current money: " + gamedata.currentMoney.toFixed(2);
      
    }

function resetGame(){
  
        gamedata = {
        currentMoney: 10
    };


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
var gameloop = window.setInterval(function(){
    
    Money1();
  }, 100)
var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("CrossSave", JSON.stringify(gamedata));
  }, 1500)
  
  var savegame = JSON.parse(localStorage.getItem("CrossSave"))
  if (savegame !== null) {
    gamedata = savegame;
    setSaveGameData()
  }
