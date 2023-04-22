var gamedata = {
    currentMoney: 10,
    threads: [],
    workingPic: false
  };

function setSaveGameData(){

    document.getElementById("currentMoney").innerHTML = "current money: " + gamedata.currentMoney.toFixed(2);
    if(gamedata.workingPic){
      document.getElementById("picButton").style.display = "none"
      console.log(gamedata.workingPic)
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
  
  document.getElementById("placeForPic").innerHTML = "<p>Upgrade Bought</p>"
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
