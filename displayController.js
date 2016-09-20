var displayShip = document.getElementById('ship');
var gameController = new GameController();
var container = $('#container');
var tileSize = 50;


function positionShip(positionInstruction){
  $('#container').find('div.ship').animate({
  left: (positionInstruction[0]-1) * tileSize,
  top: (positionInstruction[1]-1) * tileSize
  }, 200);
}
