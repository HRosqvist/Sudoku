const solveSudoku = require('./solve-sudoku')
const writeSudoku = require('./write-sudoku')

let sudoku = []

function createEmptySudoku() {
  for (let i = 0; i <= 81; i++) {
    sudoku.push(0)
  }
}

createEmptySudoku()
solveSudoku(sudoku)
writeSudoku(sudoku)
