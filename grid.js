(function(exports){

  function Map(){

    this.Array=[
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }

  Map.prototype.drawMap = function(){
    for(var i=0; i < this.Array.length; i++){
      for(var j=0; j < this.Array[i].length; j++){

        if(parseInt(this.Array[i][j]) === 0){
          $('#container').append('<div class="water"></div>');
        }
        if(parseInt(this.Array[i][j]) === 1){
          $('#container').append('<div class="ship"></div>');
        }
      }
    }
  };

  exports.Map = Map;
})(this);
