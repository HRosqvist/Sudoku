//This method gets the filled sudoku array and writes it to the console
function writeSudoku(sudokuBoard) {
  let text = '/-------------------------------------\\\n'
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      if (j === 0) {
        text += '|'
      }
      text += ' '
      text += sudokuBoard[i * 9 + j]
      text += ' '

      if (j === 2 || j === 5) {
        text += '|'
      }

      text += '|'
    }
    if (i !== 8) {
      if (i === 2 || i === 5) {
        text += '\n+---+---+---++---+---+---++---+---+---+'
      }

      text += '\n+---+---+---++---+---+---++---+---+---+\n'
    }
  }

  text += '\n\\-------------------------------------/'
  console.log(text)
}

module.exports = writeSudoku
