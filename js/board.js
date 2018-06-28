var Board = {
  rows: 5,
  colums: 5,
  
  getBoard: function () {
    return document.getElementsByClassName('board')[0];
  },

  getCells: function () {
    var board = Board.getBoard();
    return board.getElementsByTagName('li');
  },

  getAliveCells: function () {
    return document.getElementsByClassName('alive');
  },

  createCells: function () {
    var board = Board.getBoard();
    var html = '';
    var cellCount = Board.rows * Board.colums;
    for (var i = 0; i < (Board.rows*Board.colums); i++) {
      html += '<li></li>';
    }
    board.innerHTML = html;
  },

  updateCells: function (boardJS) {
    var board = Board.getBoard();
    var html = '';
    for (var i = 0; i < Board.rows; i++) {
      for (var j = 0; j < Board.colums; j++) {
        if(boardJS[i][j]){
          html += '<li class= "alive"></li>';
        }else {
          html += '<li></li>';
        }
      }
    }
    board.innerHTML = html;
  },

  nextStep: function () {
    var boardHTML = Board.getCells();
    var currentBoard = GameOfLife.getBoardFromHTML(boardHTML, Board.colums);
    var newBoard = GameOfLife.createEmptyBoard(Board.rows, Board.colums);
    GameOfLife.getNextStep(currentBoard, newBoard);
    Board.updateCells(newBoard);
  }
}
