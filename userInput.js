$(document).ready(function(){
  var typed = '';
  var currentLetter = '';
  var index = 0;

  $("#addInstructions").on("click", function() {
    var positionInstruction = $('#typed-text').val();
    document.getElementById('typed-text').value = "";
    // $('#entered-text').html(typedText);
    gameController.setShipPosition(positionInstruction);
  });
});
