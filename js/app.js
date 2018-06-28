
var play = function () {
  var cells = Board.getCells();
  Board.updateCells(cells);
}

var init = function () {
  Game.init();
  Game.start();
  // var btnPlay = Board.getPlayButton();
  // btnPlay.onclick = play;
}

window.onload = init;
