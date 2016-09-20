(function(exports){
  var map = new Map();
  var ship = new Ship();

  function GameController(){

  }

  GameController.prototype.startGame = function(){
    map.drawMap();
  };

  GameController.prototype.setShipPosition = function(positionInstruction){
    console.log('this is the instruction');
    console.log(positionInstruction);
    ship.position[0] = positionInstruction.slice(0,1);
    ship.position[1] = positionInstruction.slice(-1);
    console.log('this is the ship position');
    console.log(ship.position);
    positionShip(positionInstruction);
  };


  exports.GameController = GameController;
})(this);
