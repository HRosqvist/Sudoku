const solveSudoku = require('./methods/solve-sudoku')

let sudokuBoard = []

function fillEmptyBoard() { //fills the empty board with zeroes
  for (let i = 0; i <= 80; i++) {
    sudokuBoard.push(0)
  }
}

fillEmptyBoard()
solveSudoku(sudokuBoard)
